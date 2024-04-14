import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import ItemBox from "../components/ItemBox";
import ContentBox from "../components/ContentBox";
import siteData from "../static/siteData.json";
import StructuredSiteData from "../components/StructuredSiteData";
import AppWrapper from "../components/AppWrapper";

const IndexPage: React.FC<PageProps> = () => {

  const map = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <AppWrapper structuredData={JSON.stringify(StructuredSiteData)}>
        <section className="relative h-[70vh] min-h-[30rem] w-full">
          <div className="absolute h-full w-full">
            <StaticImage src='../static/images/room_00.jpg' alt={siteData.imageAlt} objectFit="cover" objectPosition="center" className="h-full w-full"/>
          </div>
          <div className="relative max-w-[1500px] h-full w-full px-8 mx-auto flex flex-col">
            <div id='info' className="relative text-5xl mobile:text-3xl h-full w-auto">
              <div className="flex flex-col justify-center h-full w-auto">
                <div>
                  <div className="bg-black/70 p-4 rounded-md w-auto inline-block">
                    <h1>
                      <span>
                        {siteData.shopName}
                      </span>&nbsp;
                      <span className="block font-bold mt-2">
                        {siteData.shopSubName}
                      </span>
                    </h1>
                    <div className="text-base mt-2">
                      {siteData.shopDescription.map((item,idx)=>(
                        <p key={'shopDescription'+idx}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-base mt-4 font-bold flex w-auto">
                  <a className="bg-white text-black py-2 px-5 rounded mr-2 flex" href={`tel:${siteData.phoneNumber}`}>
                    📞 전화
                  </a>
                  <button className="bg-black/70 py-2 px-5 rounded" onClick={()=>{map.current?.scrollIntoView({behavior:'smooth'})}}>
                    ⓘ 위치 정보
                  </button>
                </div>
              </div>
            </div>
            <div className="h-8 flex-shrink-0"/>
          </div>
        </section>
        <div className="relative h-14 flex-shrink-0 bg-gradient-to-t from-black to-black/0 mt-[-3.5rem]"/>
        <div className="max-w-[1500px] mx-auto w-full px-8 mt-4">
          <section id='business-event'>
            <h2 className="text-xl">{siteData.businessEvent.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 content-stretch gap-1 ">
              {
                siteData.businessEvent.items.map((item,idx)=>(
                  <ItemBox key={siteData.businessEvent.title+idx} title={item.title} descs={item.descs}/>
                ))
              }
            </div>
          </section>
          <section id='business-menu' className="mt-12">
            <h2 className="text-xl">{siteData.businessMenu.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-2 content-stretch gap-1 ">
              {
                siteData.businessMenu.items.map((item,idx)=>(
                  <ItemBox key={siteData.businessMenu.title+idx} title={item.title} descs={item.descs} descStyle={item.descStyle}/>
                ))
              }
            </div>
          </section>
          <section id='business-price' className="mt-12">
            <h2 className="text-xl">{siteData.businessPrice.title}</h2>
            {
                siteData.businessPrice.items.map((item)=>(
                  <div key={item.title}>
                    <h3 className="mt-4 text-lg">{item.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 mt-2 content-stretch gap-1 ">
                    {item.contents.map((item2)=>(
                      <ContentBox key={item2.title} title={item2.title} subTitle={item2.subTitle} items={item2.items}/>
                    ))}
                    </div>
                  </div>
                ))
            }
          </section>
          <section id='business-days' className="mt-12">
            <h2 className="text-xl">{siteData.businessDays.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-2 content-stretch gap-1 ">
              {
                siteData.businessDays.items.map((item,idx)=>(
                  <ItemBox key={siteData.businessDays.title+idx} title={item.title} descs={item.descs}/>
                ))
              }
            </div>
          </section>
          <section id='business-about' className="mt-12">
            {
              siteData.businessAbout.map((item,idx)=>(
                <div key={item.title} className={idx!==0?"mt-12":""}>
                  {
                    item.hTag === 'h2' ? 
                    <h2 className="text-xl">{item.title}</h2>
                    :<h3 className="text-xl">{item.title}</h3>
                  }
                  <div className="text-sm font-light pl-3">
                    {
                      item.items.map((content)=>(
                        <p key={content} className="mt-2">{content.split(siteData.hyperlink).map((c,i)=>(
                          <>
                            <span>{c}</span>
                            {i+1!==content.split(siteData.hyperlink).length&&
                              <Link to={`/${encodeURIComponent(siteData.about.name)}`} className="underline font-bold hover:text-canary-yellow">{siteData.hyperlink}</Link>
                            }
                          </>
                        ))}</p>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </section>
          <section id='business-interior' className="mt-12">
            <h2 className="text-xl">{siteData.businessInterior.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-2 content-stretch gap-1">
              <StaticImage src='../static/images/room_01.jpg' alt={`${siteData.imageAlt} 01`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_02.jpg' alt={`${siteData.imageAlt} 02`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_03.jpg' alt={`${siteData.imageAlt} 03`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_04.jpg' alt={`${siteData.imageAlt} 04`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_05.jpg' alt={`${siteData.imageAlt} 05`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_06.jpg' alt={`${siteData.imageAlt} 06`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_07.jpg' alt={`${siteData.imageAlt} 07`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_08.jpg' alt={`${siteData.imageAlt} 08`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
              <StaticImage src='../static/images/room_09.jpg' alt={`${siteData.imageAlt} 09`} objectFit="cover" objectPosition="center top" className="h-full w-full rounded"/>
            </div>
          </section>
          <section id='business-address' className="mt-8">
            <h2 className="text-xl mb-2">{siteData.businessAddress.title}</h2>
            <h3 className='text-sm my-2 text-canary-yellow'>{siteData.businessAddress.address}</h3>
            <div id="map" ref={map} style={{ width: "100%", height: "450px" }} >
              <iframe src={siteData.businessAddress.src} title="googleMap"
                width="100%" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </section>
        </div>
      </AppWrapper>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
	<>
    <html lang="ko"/>
    <title>{siteData.title}</title>
    <link rel="canonical" key="canonical" href={siteData.siteUrl}/>
    <meta property="og:url" key="og:url" content={siteData.siteUrl}/>
    <meta property="twitter:site" key="twitter:site" content={siteData.siteUrl}/>
    <meta property="og:title" key="og:title" content={siteData.title}/>
    <meta name="twitter:title" key="twitter:title" content={siteData.title}/>
    <meta property="og:site_name" key="og:site_name" content={siteData.shopName} />
    <meta name="description" content={siteData.description} />
    <meta property="og:description" key="og:description" content={siteData.description}/>
    <meta name="twitter:description" key="twitter:description" content={siteData.description}/>
    <meta name="keywords" key="keywords" content={siteData.keywords}/>
    <meta property="og:type" key="og:type" content="website"/>
    <meta property="og:locale" key="og:locale" content="ko_KR"/>
    <meta property="og:image:width" key="og:image:width" content="1200"/>
    <meta property="og:image:height" key="og:image:height" content="600"/>
    <meta property="og:image" key="og:image" content="/ogImage.png"/>
    <meta name="twitter:image" key="twitter:image" content="/ogImage.png"/>
    <meta name="twitter:card" key="twitter:card" content="summary_large_image"/>
    <meta name="theme-color" key="theme-color" content="#000000"/>
    <link rel="shortcut icon" key="shortcut icon" href="/favicon.ico"/>
  </>
)
