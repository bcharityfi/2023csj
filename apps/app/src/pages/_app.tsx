import '../styles.css'

import { ThirdwebProvider } from '@thirdweb-dev/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygon, polygonMumbai } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy'

import SiteLayout from '@/components/SiteLayout'
import { ALCHEMY_KEY, IS_MAINNET, WALLET_CONNECT_PROJECT_ID } from '@/constants'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [IS_MAINNET ? polygon : polygonMumbai],
  [alchemyProvider({ apiKey: ALCHEMY_KEY ? ALCHEMY_KEY : '' })]
)

const connectors = () => {
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true }
    }),
    new WalletConnectConnector({
      chains: [polygon, polygonMumbai],
      options: {
        projectId: WALLET_CONNECT_PROJECT_ID ? WALLET_CONNECT_PROJECT_ID : '',
        showQrModal: true
      }
    })
  ]
}

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
  webSocketPublicClient
})

const App = ({ Component, pageProps }: AppProps) => {
  console.log(
    'using thirdweb client id',
    process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
  )
  return (
    <WagmiConfig config={config}>
      <ThirdwebProvider
        activeChain="mumbai"
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      >
        <ThemeProvider defaultTheme="light" attribute="class">
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </ThemeProvider>
      </ThirdwebProvider>
    </WagmiConfig>
  )
}

export default App
