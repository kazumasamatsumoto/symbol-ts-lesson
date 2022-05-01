// import { Account, NetworkType } from "symbol-sdk";

// const account = Account.generateNewAccount(NetworkType.TEST_NET);
// console.log(
//   "Your new account address is:",
//   account.address.pretty(),
//   "and its private key",
//   account.privateKey
// );

// 'TBBCT4-TQY57B-XZBITH-GHTGZP-PHSIOM-5UQ4XJ-R4Q'
// 'TBBCT4-TQY57B-XZBITH-GHTGZP-PHSIOM-5UQ4XJ-R4Q'
// B17E11C2E6598AE5F1C81095B97038FD7737CA6FD3374058C26B1BBFB131E51B

import { Account, NetworkType } from "symbol-sdk";

const privateKey =
  "AB1B431B4E18653F67E8D4890CEF36382F63B4567E65A6CA4AA8A3D0A046A142";

const account = Account.createFromPrivateKey(privateKey, NetworkType.TEST_NET);
console.log("Your account address is:", account.address.pretty());

// TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY
// TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY