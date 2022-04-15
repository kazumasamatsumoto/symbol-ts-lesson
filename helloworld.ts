import { Account, NetworkType } from 'symbol-sdk';

const account = Account.generateNewAccount(NetworkType.TEST_NET);
console.log(
  'Your new account address is:',
  account.address.pretty(),
  'and its private key',
  account.privateKey,
);