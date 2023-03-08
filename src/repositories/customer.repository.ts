import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, ReferencesManyAccessor} from '@loopback/repository';
import {LocalsourceDataSource} from '../datasources';
import {Customer, CustomerRelations, Account} from '../models';
import {AccountRepository} from './account.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly accounts: ReferencesManyAccessor<Account, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.localsource') dataSource: LocalsourceDataSource, @repository.getter('AccountRepository') protected accountRepositoryGetter: Getter<AccountRepository>,
  ) {
    super(Customer, dataSource);
    this.accounts = this.createReferencesManyAccessorFor('accounts', accountRepositoryGetter,);
    this.registerInclusionResolver('accounts', this.accounts.inclusionResolver);
  }
}
