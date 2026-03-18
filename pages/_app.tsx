import type { AppProps } from 'next/app';

import '@/src/tokens/index.css';
import '@/pages/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

