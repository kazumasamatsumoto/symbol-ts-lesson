import {
  Account,
  Deadline,
  PublicAccount,
  RepositoryFactoryHttp,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk'

const example = async (): Promise<void> => {
  const nodeUrl = "https://sym-test.opening-line.jp:3001";
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();
  const networkType = await repositoryFactory.getNetworkType().toPromise();
  const networkGenerationHash = await repositoryFactory.getGenerationHash().toPromise();

  const alicePrivateKey = 'AB1B431B4E18653F67E8D4890CEF36382F63B4567E65A6CA4AA8A3D0A046A142';
  const aliceAccount = Account.createFromPrivateKey(alicePrivateKey, networkType!);

  const certificatePublicKey = '3C5873668AD628ED587097AC79547BC365F19F2A09C4FFAC9D68BA3E49E87513';
  const certificatePublicAccount = PublicAccount.createFromPublicKey(
    certificatePublicKey,
    networkType!,
  );

  const encryptedMessage = aliceAccount.encryptMessage(
    "This message is secret",
    certificatePublicAccount,
  );

  const transferTransaction = TransferTransaction.create(
    Deadline.create(epochAdjustment!),
    certificatePublicAccount.address,
    [],
    encryptedMessage,
    networkType!,
  ).setMaxFee(100);

  const signedTransaction = aliceAccount.sign(transferTransaction, networkGenerationHash!);

  const transactionRepository = repositoryFactory.createTransactionRepository();

  const response = await transactionRepository.announce(signedTransaction).toPromise();
  console.log(response)
}

example().then();