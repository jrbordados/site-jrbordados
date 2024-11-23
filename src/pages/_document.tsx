import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="Copyright(c) JR Bordados" />
        <meta name="contact" content="jrbordados@hotmail.com.br" />
        <meta name="author" content="JR Bordados e Corte a Laser" />
        <meta name="msvalidate.01" content="FAEFC6DE0AA54CB3AE1FC5259319CEDF" />
        <meta name="yandex-verification" content="d802ad689a5dee2d" />
        <meta name="google-site-verification" content="GdfVzEJvULIdy76hSKYZP7dxNHXbyaVXtRBhrfbm56o" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="general" />
        <meta property="og:type" content="object" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="JR Bordados e Corte a Laser" />
        <meta name="geo.country" content="BR" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
