/* eslint-disable jsx-a11y/alt-text */
'use client'

import Script from 'next/script'

interface FacebookPixelProps {
  pixelId: string
}

export const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }: FacebookPixelProps) => {
  if (!pixelId) return null

  return (
    <>
      {/* Pixel Script */}
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          !(function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){
              n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
            };
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
          })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Fallback noscript */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  )
}
