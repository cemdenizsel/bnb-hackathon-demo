import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from '@particle-network/connect-react-ui';
import { evmWallets } from '@particle-network/connect';
import { WalletEntryPosition } from '@particle-network/auth';
import { Ethereum, EthereumGoerli } from '@particle-network/common';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ModalProvider
      options={{
        projectId: '64c15dc9-8f84-4f6f-bf42-7936f544561c',
        clientKey: 'cby7kPIMuvC85b0eAJLIUWA1imXcgCO9r2lQJ16i',
        appId: 'd0effc6b-c39a-4594-bf70-aaad85dd7767',
        chains: [
          Ethereum,
          EthereumGoerli
        ],
        particleWalletEntry: {    //optional: particle wallet config
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [
            Ethereum,
            EthereumGoerli
          ],
          customStyle: {}, //optional: custom wallet style
        },
        wallets: evmWallets({ qrcode: false }),
      }}
      theme={'auto'}
      language={'en'}   //optional：localize, default en
      walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
      particleAuthSort={[    //optional：display particle auth items and order
        'email',
        'phone',
        'google',
        'apple',
        'facebook'
      ]}
    >
      <App />
    </ModalProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


