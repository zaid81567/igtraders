import React from 'react'
import ContactInfos from './ContactInfos/ContactInfos'
import Footer from './FooterLinks/FooterLinks'
import FooterLinks from './FooterLinks/FooterLinks'
import CopyrightBanner from './CopyrightBanner/CopyrightBanner'

function HomePageFooter() {
  return (
    <>
        <ContactInfos/>
        <FooterLinks/>
        <CopyrightBanner/>
    </>
  )
}

export default HomePageFooter