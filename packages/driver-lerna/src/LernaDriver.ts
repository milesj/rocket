import { Driver } from '@beemo/core';
import { LernaConfig } from './types';

// Success: Writes command output to stdout, version footer to stderr
export class LernaDriver extends Driver<LernaConfig> {
	override readonly name = '@beemo/driver-lerna';

	override bootstrap() {
		this.setMetadata({
			bin: 'lerna',
			configName: 'lerna.json',
			description: this.tool.msg('app:lernaDescription'),
			filterOptions: false,
			title: 'Lerna',
		});
	}
}
