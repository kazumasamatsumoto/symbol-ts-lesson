import { filter, map, mergeMap, toArray } from "rxjs/operators";
import {
  Address,
  MosaicId,
  RepositoryFactoryHttp,
  TransactionGroup,
  TransactionType,
  TransferTransaction,
} from "symbol-sdk";

// 署名した公開鍵
const signerPublicKey =
  "8DEB6986E0B9DC5F4A71E0F73BB437567B156730BFCD3F133B977B43152EF492";

// 受け取ったアドレスから復元したアカウント
const recipientRawAddress = "TATO6GDWZRAT6IY4HWN4QUHIB73KZSY2T3NXX5A";
const recipientAddress = Address.createFromRawAddress(recipientRawAddress);

// モザイクIDを生成します。
// １６進数のモザイクID
const mosaicIdHex = "3A8416DB2D53B6C8";
// 可分性（小数点の桁数）
const divisibility = 6;

// モザイクIDを復元
const mosaicId = new MosaicId(mosaicIdHex);

const nodeURL = "https://sym-test.opening-line.jp:3001";
const repositoryFactory = new RepositoryFactoryHttp(nodeURL);
const transactionHttp = repositoryFactory.createTransactionRepository();

const searchCriteria = {
  group: TransactionGroup.Confirmed,
  signerPublicKey,
  recipientAddress,
  pageSize: 100,
  pageNumber: 1,
  type: [TransactionType.TRANSFER],
};

transactionHttp
  .search(searchCriteria)
  .pipe(
    map((_) => _.data),
    mergeMap((_) => _),
    map((_) => _ as TransferTransaction),
    filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(mosaicId)),
    map((_) => _.mosaics[0].amount.compact() / Math.pow(10, divisibility)),
    toArray(),
    map((_) => _.reduce((a, b) => a + b, 0))
  )
  .subscribe(
    (total) =>
      console.log(
        "Total",
        mosaicId.toHex(),
        "sent to account",
        recipientAddress.pretty(),
        "is:",
        total
      ),
    (err) => console.error(err)
  );
