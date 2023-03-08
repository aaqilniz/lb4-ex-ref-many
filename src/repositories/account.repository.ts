import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalsourceDataSource} from '../datasources';
import {Account, AccountRelations} from '../models';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id,
  AccountRelations
> {
  constructor(
    @inject('datasources.localsource') dataSource: LocalsourceDataSource,
  ) {
    super(Account, dataSource);
  }
}
