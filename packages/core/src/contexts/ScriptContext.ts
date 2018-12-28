/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import Context from './Context';
import Script from '../Script';
import { Arguments } from '../types';

export default class ScriptContext<T = { name: string }> extends Context<T> {
  script: Script | null = null;

  scriptName: string = '';

  scriptPath: string = '';

  constructor(args: Arguments<T>, name: string) {
    super(args);

    this.scriptName = name;
  }

  /**
   * Set the script object and associated metadata.
   */
  setScript(script: Script, path: string): this {
    this.script = script;
    this.scriptName = script.key;
    this.scriptPath = path;

    return this;
  }
}
