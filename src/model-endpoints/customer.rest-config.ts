import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Customer} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Customer,
  pattern: 'CrudRest',
  dataSource: 'localsource',
  basePath: '/customers',
  readonly: false,
};
module.exports = config;
