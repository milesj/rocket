/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs-extra';
import path from 'path';
import parseArgs from 'yargs-parser';
import { Routine } from 'boost';

export default class CreateConfigRoutine extends Routine {
  /**
   * Create a temporary configuration file or pass as an option.
   */
  createConfigFile(config: Object): string {
    const { metadata, name } = this.engine;
    const configPath = path.join(this.context.root, metadata.fileName);

    this.context.configFilePaths[name] = configPath;

    return fs.writeJson(configPath, config, { spaces: 2 });
  }

  /**
   * Create config by executing tasks in order.
   */
  execute(): Promise<Object> {
    const { name } = this.engine;

    this
      .task(`Loading external ${name} module config`, this.loadConfigFromFilesystem)
      .task(`Loading local ${name} rocket config`, this.extractConfigFromPackage)
      .task(`Merging ${name} config objects`, this.mergeConfigs)
      .task(`Creating temporary ${name} config file`, this.createConfigFile);

    return this.serializeTasks([]);
  }

  /**
   * Extract configuration from "rocket.<engine>" within the local project's package.json.
   */
  extractConfigFromPackage(configs: Object[]): Object[] {
    const { name } = this.engine;
    const { config } = this.tool;

    if (config[name]) {
      configs.push(config[name]);
    }

    return configs;
  }

  /**
   * Gather CLI arguments to pass to the configuration file.
   */
  getArgsToPass(): Object {
    return parseArgs([
      ...this.context.args,
      ...this.engine.options.args,
    ].map(String));
  }

  /**
   * Merge multiple configuration sources using the current engine.
   */
  mergeConfigs(configs: Object[]): Object {
    return configs.reduce((masterConfig, config) => (
      this.engine.mergeConfig(masterConfig, config)
    ), {});
  }

  /**
   * Load configuration from the node module (the consumer owned package).
   */
  loadConfigFromFilesystem(configs: Object[]): Object[] {
    const { config: { config: moduleName }, configLoader } = this.tool;
    const { name } = this.engine;

    // Allow for local development
    const filePath = (moduleName === '@local')
      ? path.join(this.context.root, `config/${name}.js`)
      : configLoader.resolveModuleConfigPath(name, moduleName);

    if (fs.existsSync(filePath)) {
      configs.push(configLoader.parseFile(filePath, this.getArgsToPass()));
    }

    return configs;
  }
}
