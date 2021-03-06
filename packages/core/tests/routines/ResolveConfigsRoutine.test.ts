import fs from 'fs-extra';
import { ConfigContext } from '../../src/contexts/ConfigContext';
import { Driver } from '../../src/Driver';
import { ResolveConfigsRoutine } from '../../src/routines/ResolveConfigsRoutine';
import { mockDebugger, mockDriver, mockTool, stubConfigContext } from '../../src/test';
import { Tool } from '../../src/Tool';

describe('ResolveConfigsRoutine', () => {
	let writeSpy: jest.SpyInstance;
	let copySpy: jest.SpyInstance;
	let routine: ResolveConfigsRoutine;
	let plugins: Record<string, Driver>;
	let tool: Tool;
	let driver: Driver;
	let context: ConfigContext;

	beforeEach(() => {
		plugins = {};
		tool = mockTool();
		driver = mockDriver('foo', tool);
		context = stubConfigContext();

		routine = new ResolveConfigsRoutine('config', 'Generating configurations', { tool });
		// @ts-expect-error Overwrite readonly
		routine.debug = mockDebugger();

		context.addDriverDependency(driver);

		jest
			.spyOn(tool.driverRegistry, 'get')
			.mockImplementation((name) => plugins[name] || mockDriver(name, tool));

		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		writeSpy = jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());

		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		copySpy = jest.spyOn(fs, 'copy').mockImplementation(() => Promise.resolve());
	});

	afterEach(() => {
		writeSpy.mockRestore();
		copySpy.mockRestore();
	});

	describe('execute()', () => {
		it('serializes if `parallel` config is false', async () => {
			const spy = jest.spyOn(routine, 'createConcurrentPipeline');

			tool.config.configure.parallel = false;

			const result = await routine.execute(context);

			expect(spy).not.toHaveBeenCalled();
			expect(result).toHaveLength(1);
		});

		it('parallelizes if `parallel` config is true', async () => {
			const spy = jest.spyOn(routine, 'createConcurrentPipeline');

			const result = await routine.execute(context);

			expect(spy).toHaveBeenCalled();
			expect(result).toHaveLength(1);
		});
	});

	describe('setupConfigFiles()', () => {
		it('pipes a routine for each driver', async () => {
			const foo = mockDriver('foo', tool);
			const bar = mockDriver('bar', tool);
			const baz = mockDriver('baz', tool);

			context.drivers = new Set([foo, bar, baz]);

			const routines = await routine.setupConfigFiles(context);

			expect(routines).toHaveLength(3);

			expect(routines[0].key).toBe('baz');
			expect(routines[0].options.driver).toBe(baz);
			expect(routines[1].key).toBe('bar');
			expect(routines[1].options.driver).toBe(bar);
			expect(routines[2].key).toBe('foo');
			expect(routines[2].options.driver).toBe(foo);
		});
	});

	describe('resolveDependencies()', () => {
		it('adds primary driver when no dependencies', () => {
			routine.resolveDependencies(context);

			expect([...context.drivers]).toEqual([driver]);
		});

		it('adds dependency to driver list', () => {
			driver.metadata.dependencies = ['bar'];

			routine.resolveDependencies(context);

			expect([...context.drivers]).toEqual([driver, mockDriver('bar', tool)]);
		});

		it('handles sub-dependencies', () => {
			plugins.bar = mockDriver('bar', tool, { dependencies: ['baz', 'qux'] });
			plugins.baz = mockDriver('baz', tool);
			plugins.qux = mockDriver('qux', tool, { dependencies: ['oof'] });
			plugins.oof = mockDriver('oof', tool);

			driver.metadata.dependencies = ['bar'];

			routine.resolveDependencies(context);

			expect([...context.drivers]).toEqual([
				driver,
				plugins.bar,
				plugins.baz,
				plugins.qux,
				plugins.oof,
			]);
		});

		it('emits `onResolveDependencies` event', () => {
			const spy = jest.fn();

			tool.onResolveDependencies.listen(spy);

			driver.metadata.dependencies = ['bar'];

			routine.resolveDependencies(context);

			expect(spy).toHaveBeenCalledWith(context, [...context.drivers]);
		});
	});
});
