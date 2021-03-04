require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin crisp foster slab'; 
let testAccounts = [
"0xb2781e29224c3c6ee8a4a03263cfaa216dbfd93541cefc9344eaf4cf08f1141b",
"0x53fcb9398ed1e6f18e343eba1c90ddace9f9fb2469db608059ce2407c9dac1c6",
"0xe5909f9f6ea789696d49e2c80a9bfef16b9a0148d83f834b41f8f02388822f0c",
"0x7ba4894ea6480b29fc09adb36b8b2fca78fc7e79c2c38719c4aafaebc5094be5",
"0x96415e4951f3191ff9a194d5c55319ecc52285e1cd539a8632d48104dd5439f9",
"0xaa7e265e4279b4883d43818ff0d80d4a15f45fa6b45ed298de26427d2aeae168",
"0x329e437c31eeb77e07a7cebc6f68a0c46811aba64122433cb2e5d324445d6288",
"0xd3ca5c4dc1b3ed3452ed5a6ba2e904a0d0a4aaaced4687f7e860ae6707962be1",
"0xffd776634f32b95a2a4115d9e1755e3da0218cab41ce8095fd0dee7fdddf3e7a",
"0xb02a82ceff779cadebb7d116dbda1415ff7a5a915c5215707b339b3a1fc0997e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
