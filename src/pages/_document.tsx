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

        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// <!-- Meta Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '1597795847547618');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=1597795847547618&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->
