import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'localsource',
  connector: 'mysql',
  sharedData: {},
  forwardErrorToEnvironment: false,
  skipLocalCache: true,
  _: [],
  c: '{"name":"localsource","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"refmany"}',
  y: true,
  initialGenerator: true,
  resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@aaqilniz/cli-updated/generators/datasource/index.js',
  namespace: 'loopback4:datasource',
  'skip-cache': false,
  'skip-install': false,
  'force-install': false,
  'ask-answered': false,
  config: '{"name":"localsource","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"refmany"}',
  yes: true,
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'asdf',
  database: 'refmany'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalsourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'localsource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.localsource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
