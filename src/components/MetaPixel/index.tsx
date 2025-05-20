// 'use client'
// import React from 'react'
// import ReactPixel from 'react-facebook-pixel'

// import { useRouter } from 'next/router'

// interface MetaPixelProps {
//   pixelId?: string
// }

// // this can't be instatiated in the server
// export const MetaPixelClient: React.FC<MetaPixelProps> = _p => {
//   const { events } = useRouter()

//   React.useEffect(() => {
//     const checkPage = () => ReactPixel.pageView()
//     ReactPixel.init('1597795847547618')
//     checkPage()

//     events.on('routeChangeComplete', checkPage)
//     return () => {
//       events.off('routeChangeComplete', checkPage)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return <></>
// }
export {}
