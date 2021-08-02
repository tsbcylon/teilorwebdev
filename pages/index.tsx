import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BackgroundHero from '../components/BackgroundHero'
import ContainerHero from '../components/ContainerHero'
import SelectedWorks from '../components/SelectedWorks'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import About from '../components/About'
import gsap from 'gsap'
import { Power2 } from 'gsap'

export default function Home() {

  if(typeof window !== 'undefined'){

      document.addEventListener('DOMContentLoaded', () => {
          
        let tl = gsap.timeline()

        tl
          .to('.menu-1', {
              duration: 1.5,
              y: -250,
              opacity: 0,
              delay: 2,
              ease: Power2.easeOut,
          })
          .to('.menu', {
              // duration: 1,
              height: 'initial',
              justifyContent: 'space-between',
              alignItems: 'initial',
              // delay: 1,
              ease: Power2.easeOut,
          })
          .to('.bg-hero', {
            
            duration: 2,
            opacity: 1,
            // delay: 1,
            ease: Power2.easeOut,
          })
          .to('.menu-1', {
              duration: 1,
              y: 0,
              opacity: 1,
              delay: 1,
              ease: Power2.easeOut,
          }, '-=1')
          .from('.menu-2', {
              y: -50,
          })
          .to('.menu-2', {
              duration: 1,
              opacity: 1,
              y: 0,
              ease: Power2.easeOut,
          })
          .from('.menu-3', {
              y: -50,
          })
          .to('.menu-3', {
              duration: 1,
              opacity: 1,
              y: 0,
              ease: Power2.easeOut,
          })
          // .from('.container-item div', {
          //   y: 200,
          // }, '-=1')
          // .to('.container-item div', {
          //   duration: 2,
          //   opacity: 1,
          //   y: 0,
          //   stagger: {each: .4},
          //   delay: .7,
          //   ease: Power2.easeOut,
          // })
      })

  }

  return (
    <main>

      {/* HEAD */}

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        
        <title>Teilor Web Developer</title>
      </Head>

      {/* HEADER */}
      
      <Header />

      {/* BACKGROUND HERO */}

      <BackgroundHero />

      {/* CONTAINER */}

      <ContainerHero />

      {/* SELECTED WORKS */}

      <SelectedWorks />

      {/* ABOUT */}

      <About />

      {/* GET IN TOUCH */}

      <GetInTouch />

      {/* FOOTER */}

      <Footer />

    </main>
  )
}
