"use client"
import { useState } from 'react';
import { restoreWalletFromSeed } from '@/components/utils/wallet';

export default function WalletPage() {
    const [seedPhrase, setSeedPhrase] = useState('');
    const [wallet, setWallet] = useState<any>(null);

    const handleRestore = () => {
        const restoredWallet = restoreWalletFromSeed(seedPhrase);
        setWallet(restoredWallet);
    };

    return (
        <div>
            <h1>Відновити гаманець</h1>
            <input
                type="text"
                value={seedPhrase}
                onChange={(e) => setSeedPhrase(e.target.value)}
                placeholder="Введіть seed-фразу"
            />
            <button onClick={handleRestore}>Відновити</button>

            {wallet && (
                <div>
                    <h2>Ваша EVM-сумісна адреса: {wallet.address}</h2>
                </div>
            )}
        </div>
    );
}
