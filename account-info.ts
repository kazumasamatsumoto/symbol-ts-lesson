import { Address, RepositoryFactoryHttp } from 'symbol-sdk'

const rawAddress = "TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY"
const address = Address.createFromRawAddress(rawAddress);
const nodeURL = "https://sym-test.opening-line.jp:3001";
const repositoryFactory = new RepositoryFactoryHttp(nodeURL);
const accountHttp = repositoryFactory.createAccountRepository();

accountHttp.getAccountInfo(address).subscribe(
  (accountInfo) => console.log(accountInfo),
  (err) => console.error(err),
);

// AccountInfo {
//   version: 1,
//   recordId: '62458691BF42F221DFBFE0C9',
//   address: Address {
//     address: 'TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY',
//     networkType: 152
//   },
//   addressHeight: UInt64 { lower: 21514, higher: 0 },
//   publicKey: '8DEB6986E0B9DC5F4A71E0F73BB437567B156730BFCD3F133B977B43152EF492',
//   publicKeyHeight: UInt64 { lower: 25873, higher: 0 },
//   accountType: 1,
//   supplementalPublicKeys: SupplementalPublicKeys {
//     linked: AccountLinkPublicKey {
//       publicKey: 'BF0A6E932132BE550828277E8069D6F412293D40A1F4FC6B8228A6C026BB9F8F'
//     },
//     node: AccountLinkPublicKey {
//       publicKey: 'A71D197952C797FB940C524DAF9B7BE8939E0125D9310939955D0DD7F9B6D38A'
//     },
//     vrf: AccountLinkPublicKey {
//       publicKey: '723CB97FBF369DE122BF32CC103A302342077A3A7777772ACA863D460061C655'
//     },
//     voting: undefined
//   },
//   activityBucket: [
//     ActivityBucket {
//       startHeight: [UInt64],
//       totalFeesPaid: [UInt64],
//       beneficiaryCount: 0,
//       rawScore: [UInt64]
//     },
//     ActivityBucket {
//       startHeight: [UInt64],
//       totalFeesPaid: [UInt64],
//       beneficiaryCount: 0,
//       rawScore: [UInt64]
//     },
//     ActivityBucket {
//       startHeight: [UInt64],
//       totalFeesPaid: [UInt64],
//       beneficiaryCount: 0,
//       rawScore: [UInt64]
//     },
//     ActivityBucket {
//       startHeight: [UInt64],
//       totalFeesPaid: [UInt64],
//       beneficiaryCount: 0,
//       rawScore: [UInt64]
//     },
//     ActivityBucket {
//       startHeight: [UInt64],
//       totalFeesPaid: [UInt64],
//       beneficiaryCount: 0,
//       rawScore: [UInt64]
//     }
//   ],
//   mosaics: [
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] },
//     Mosaic { id: [MosaicId], amount: [UInt64] }
//   ],
//   importance: UInt64 { lower: 617051524, higher: 117 },
//   importanceHeight: UInt64 { lower: 348840, higher: 0 }
// }
// symbol-ts-lesson$