require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth shift promote give produce bottom gasp'; 
let testAccounts = [
"0x15507488d8200a0466317c36a719f96bf4dc76510d78cb8b88b838751c990608",
"0x12a5fc712b396e89d24f2b5bb8c1fb834874460fbfbd2e96359a0c1fc244f7f6",
"0x8859aa1daf89d4a44788330a45676e44098793b72b15a0f7b528ce6da202eec7",
"0x3f37d092c662f909915a2179b1ef3e5a266fa4ebaffd9906a8e79e326366f8ee",
"0x384ad7acb291f5a1a344dc64350f8dd349dc9e5dddb4cabde409b811013288fa",
"0xdf1ca9938a5a8296664f083d84fe3f233f71ce1a2ca956a5f8a90af3f32be068",
"0x012a2b6448f59a26213825434e89289bcbecb358d47dae9ba27b7ad08e227aa7",
"0x77d5fd0a1308584077a6c0f045d2e023325af7793e5195da1cb440a91c373254",
"0xde6ef71b0e784bb31d6cabe2bf10ad38afd6c35e7bf5386c6c33e2fe05a92c9b",
"0x07766847498618f45d67886a89856b1ee0a7f1311721a4f0efd9b4876c4eddf3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

