import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'proyectDB',
  connector: 'mongodb',
  url: 'mongodb://127.0.0.1',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'proyect',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProyectDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'proyectDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.proyectDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
