import { Link, Script } from 'gatsby';
import React from 'react';
import siteData from "../static/siteData.json";
import { StaticImage } from 'gatsby-plugin-image';

const AppWrapper = ({children, structuredData, maxWidth}:{children:React.ReactNode, structuredData:string, maxWidth?:string}) => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <main className="font-[NanumSquare,sans-serif] font-normal min-h-screen bg-black text-white break-keep">
        <header className="flex items-center bg-black py-4 px-8 w-full z-10">
          <Link to={'/'} className="flex mr-auto items-center">
            <StaticImage src='../static/images/icon.png' alt={siteData.imageAlt+' 아이콘'} className="h-8 w-8 mr-2 rounded-full flex-shrink-0"/>
            <span id='logo' className="w-full text-red font-extrabold text-3xl">{siteData.shopName}</span>
          </Link>
          <Link to={`/${encodeURIComponent(siteData.about.name)}`} className="font-bold text-lg">{siteData.about.name}</Link>
        </header>
        {children}
        <div className='my-8 bg-white/30 h-12'/>
        <footer className={`max-w-[${maxWidth||1500}px] w-full mx-auto px-8`}>
          <div className="text-sm font-light pb-20">
            <p>상호: {siteData.shopName} | {siteData.shopSubName}</p>
            <p>주소: {siteData.businessAddress.address}</p>
            <p>예약문의: {siteData.phoneNumber}</p>
            <p className="mt-2">Copyright © 2024 {siteData.shopName} | {siteData.shopSubName} | All rights reserved</p>
          </div>
        </footer>
        <div className="fixed bottom-0 z-[100] w-full">
          <div className="mx-auto w-full px-8 py-4 bg-black flex justify-center">
            <div className="text-center w-auto mr-4 text-sm flex-shrink-0">
              <p>{siteData.shopName}</p>
              <p className='text-canary-yellow font-bold'>24시 상주영업진</p>
            </div>
            <a className="bg-red text-white font-bold text-sm max-w-96 py-2 px-5 rounded-full justify-center flex items-center w-full" href={`tel:${siteData.phoneNumber}`}>
              연락하기
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppWrapper;