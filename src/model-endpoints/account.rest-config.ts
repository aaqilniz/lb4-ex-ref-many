import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Account} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Account,
  pattern: 'CrudRest',
  dataSource: 'localsource',
  basePath: '/accounts',
  readonly: false,
};
module.exports = config;
