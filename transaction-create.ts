import {
  Account,
  Address,
  Deadline,
  PlainMessage,
  RepositoryFactoryHttp,
  TransferTransaction,
  UInt64,
  MosaicId,
  Mosaic,
} from "symbol-sdk";

const example = async (): Promise<void> => {
  const nodeUrl = "https://sym-test.opening-line.jp:3001";
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();
  const networkType = await repositoryFactory.getNetworkType().toPromise();
  const networkGenerationHash = await repositoryFactory.getGenerationHash().toPromise();
  const mosaicId = "3A8416DB2D53B6C8";
  const networkCurrencyMosaicId = new MosaicId(mosaicId);

  const rawAddress = "TATO6GDWZRAT6IY4HWN4QUHIB73KZSY2T3NXX5A";
  const recipientAddress = Address.createFromRawAddress(rawAddress);

  const transferTransaction = TransferTransaction.create(
    Deadline.create(epochAdjustment!),
    recipientAddress,
    [
      new Mosaic(
      networkCurrencyMosaicId,
      UInt64.fromUint(10 * Math.pow(10, 6))
    ),],
    PlainMessage.create("This is a test message"),
    networkType!,
  ).setMaxFee(100);

  const privateKey = "AB1B431B4E18653F67E8D4890CEF36382F63B4567E65A6CA4AA8A3D0A046A142"
  const account = Account.createFromPrivateKey(privateKey, networkType!);
  const signedTransaction = account.sign(transferTransaction, networkGenerationHash!);
  console.log('Payload:', signedTransaction.payload);
  console.log('Transaction Hash:', signedTransaction.hash);

  const transactionRepository = repositoryFactory.createTransactionRepository();
  const response = await transactionRepository.announce(signedTransaction).toPromise();
  console.log(response);
};

example().then();
