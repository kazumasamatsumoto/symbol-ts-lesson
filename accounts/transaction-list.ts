import { Address, RepositoryFactoryHttp, TransactionGroup} from 'symbol-sdk'

const rawAddress = 'TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY'
const address = Address.createFromRawAddress(rawAddress);

const nodeURL = "https://sym-test.opening-line.jp:3001";
const repositoryFactory = new RepositoryFactoryHttp(nodeURL);
const transactionHttp = repositoryFactory.createTransactionRepository();

const searchCriteria = {
  group: TransactionGroup.Confirmed,
  address,
  pageNumber: 2,
  pageSize: 100,
};

transactionHttp.search(searchCriteria).subscribe(
  (page) => console.log(page.data),
  (err) => console.error(err),
);