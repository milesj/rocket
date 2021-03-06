/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CreateConfig } from './commands/CreateConfig';
import { RunDriver } from './commands/RunDriver';
import { RunScript } from './commands/RunScript';
import { Scaffold } from './commands/Scaffold';
import { createDriverCommand } from './createDriverCommand';
import { argv, parallelArgv, program, tool } from './setup';

async function run() {
	// Add normal commands
	program
		.register(new CreateConfig())
		.register(new RunDriver())
		.register(new RunScript())
		.register(new Scaffold());

	// Add categories
	program.categories({
		core: 'Core',
		driver: 'Drivers',
		script: 'Scripts',
	});

	// @ts-expect-error Inherit hidden buffer
	tool.errStream = program.errBuffer;

	// @ts-expect-error Inherit hidden buffer
	tool.outStream = program.outBuffer;

	// Run the program!
	await program.runAndExit(argv, async () => {
		// Load config and plugins
		await tool.bootstrap();

		// Bootstrap config module
		await tool.bootstrapConfigModule();

		// Add a command for each driver
		tool.driverRegistry.getAll().forEach((driver) => {
			program.register(createDriverCommand(driver, parallelArgv));
		});
	});
}

void run();
