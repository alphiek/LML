import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetaData } from '../hooks/useSiteMetaData'

import HeadlineSection from '../components/Headline/HeadlineSection'
import { LandlordSlides } from '../components/Slideshow/LandlordSlides'
import LandlordS1 from '../components/LandlordS1/LandlordS1'
import Contracts from '../components/Contracts/Contracts'
import Clients from '../components/Clients/Clients'
import Payments from '../components/Payments/Payments'
import ProcessContainer from '../components/ProcessCarousel/ProcessContainer'
import PressReel from '../components/PressReel/PressReel'
import Testimonial from '../components/Testimonial/Testimonial'
import Carousel from '../components/Carousel/Carousel'

const LandlordPage = () => {
  const { siteUrl, title, social } = useSiteMetaData()
  return (
    <>
      <Helmet>
        <title>Like-Minded Living - London Tenant Finding Agency</title>
        <meta
          name="description"
          content="Specialist tenant finding agency for flat-sharers based in London"
        ></meta>
        <link
          rel="dns-prefetch"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://likemindedliving.co.uk/landlords-estate-agents"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://likemindedliving.co.uk/landlords-estate-agents"
        />
        <meta property="og:url" content={siteUrl}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Like-Minded Living - London Tenant Finding Agency"
        ></meta>
        <meta
          property="og:image"
          content="https://likemindedliving.co.uk/images/og-image.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta
          property="og:description"
          content="Specialist tenant finding agency for flat-sharers based in London"
        ></meta>
        <meta property="og:site_name" content={title}></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@LikeMindedLvng"></meta>
        <meta name="twitter:url" content={siteUrl}></meta>
        <meta
          name="twitter:title"
          content="Like-Minded Living - London Tenant Finding Agency"
        ></meta>
        <meta
          name="twitter:description"
          content="Specialist tenant finding agency for flat-sharers based in London"
        ></meta>
        <meta
          name="twitter:image"
          content="https://likemindedliving.co.uk/images/og-image.jpg"
        ></meta>
        <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "RealEstateAgent",
              "name": "${title}",
              "description": "Specialist tenant finding agency for flat-sharers based in London",
              "image": "https://likemindedliving.co.uk/images/og-image.jpg",
              "logo": "https://likemindedliving.co.uk/images/logo.png",
              "@id": "${siteUrl}",
              "url": "${siteUrl}",
              "email": "property@likemindedliving.co.uk",
	            "telePhone": "+44 207 859 4781",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chester House, 81 - 83 Fulham High Street",
                "addressLocality": "Fulham",
                "addressRegion": "London",
                "postalCode": "SW63JA"
              },
              "openingHours": "Mo,Tu,We,Th,Fr,Sa 08:00-20:00",
              "openingHoursSpecification": [ {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              } ],
              "areaServed": [
                "Fulham",
                "Chelsea",
                "Clapham",
                "Balham",
                "Central London",
                "Hammersmith",
                "Putney",
                "Shoreditch",
                "Hoxton",
                "London"
              ],
              "sameAs": [
                "${social.fb}",
                "${social.insta}",
                "${social.twitter}"
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.464900",
                "longitude": "-0.209210"
              },
              "priceRange": "$"
          }
     `}</script>
      </Helmet>
      <HeadlineSection name="landlord" />
      <LandlordSlides />
      <LandlordS1 />
      <ProcessContainer name="landlord" />
      <Contracts />
      <Clients />
      <Payments />
      <PressReel />
      <Testimonial name="landlord" />
      <Carousel name="landlordBlogs" />
    </>
  )
}

export default LandlordPage
