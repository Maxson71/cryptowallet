import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet';

// Функція для генерації seed-фрази
export const generateSeedPhrase = (): string => {
    return bip39.generateMnemonic();
};

// Функція для відновлення гаманця з seed-фрази
export const restoreWalletFromSeed = (seedPhrase: string) => {
    const seed = bip39.mnemonicToSeedSync(seedPhrase);
    const hdwallet = hdkey.fromMasterSeed(seed);

    const walletPath = "m/44'/60'/0'/0/0";
    const wallet = hdwallet.derivePath(walletPath).getWallet();

    const privateKey = wallet.getPrivateKeyString();
    const address = wallet.getAddressString();

    return {
        address,  // EVM-сумісна адреса для всіх мереж
        privateKey,  // Один приватний ключ для всіх EVM-сумісних мереж
    };
};