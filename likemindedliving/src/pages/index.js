import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetaData } from '../hooks/useSiteMetaData'
import HeadlineSection from '../components/Headline/HeadlineSection'
import ProcessContainerTenants from '../components/ProcessCarousel/ProcessContainerTenants'
import Housemate from '../components/Housemate/Housemate'
import Algorithm from '../components/Algorithm/Algorithm'
import PressReel from '../components/PressReel/PressReel'
import IdealChoice from '../components/IdealChoice/IdealChoice'
import Testimonial from '../components/Testimonial/Testimonial'
import Carousel from '../components/Carousel/Carousel'
import { TenantSlides } from '../components/Slideshow/TenantSlides'

const IndexPage = () => {
  const { siteUrl, title, description, social } = useSiteMetaData()
  return (
    <>
      <Helmet>
      <title>
          Like-Minded Living - Find Rental Properties Everywhere Across London
        </title>
        <meta name="description" content={description}></meta>
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
          href="https://rkkcollective.com"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://rkkcollective.com"
        />
        <meta property="og:url" content={siteUrl}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Like-Minded Living - Find Rental Properties Everywhere Across London"
        ></meta>
        <meta
          property="og:image"
          content="https://rkkcollective.com/images/og-image.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:site_name" content={title}></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@LikeMindedLvng"></meta>
        <meta name="twitter:url" content={siteUrl}></meta>
        <meta
          name="twitter:title"
          content="Like-Minded Living - Find Rental Properties Everywhere Across London"
        ></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta
          name="twitter:image"
          content="https://rkkcollective.com/images/og-image.jpg"
        ></meta>
        <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "RealEstateAgent",
              "name": "${title}",
              "description": "${description}",
              "image": "https://rkkcollective.com/images/og-image.jpg",
              "logo": "https://rkkcollective.com/images/logo.png",
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
      <HeadlineSection name="tenant" />
      <TenantSlides/>
      <ProcessContainerTenants name="tenant" />
      <Carousel name="properties" />
      <Housemate />
      <Algorithm />
      <PressReel />
      <IdealChoice />
      <Testimonial name="tenant" />
      <Carousel name="blogs" />
    </>
  )
}

export default IndexPage
