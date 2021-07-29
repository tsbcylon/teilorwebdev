import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imgHero from '../public/hero.png'
import logo from '../public/logo.svg'
import imgLetmeask from '../public/letmeask.png'
import imgDevdotfinance from '../public/devdotfinance.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Home() {

  if(typeof window !== 'undefined'){

    document.addEventListener('DOMContentLoaded', () => {
      let tl = gsap.timeline()
      tl
        .to('.menu-1', {
          opacity: 1,
          delay: .5
        })
        .to('.menu-2', {
          opacity: 1,
        })
        .to('.menu-3', {
          opacity: 1,
        })
        .to('.menu-4', {
          opacity: 1,
        })
        .to('.menu-5', {
          opacity: 1,
        })
    })

  }

  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        
        <title>Teilor Web Developer</title>
      </Head>

      {/* HEADER */}
      
      <header className="menu">
        <div className="menu-left">
          <Link href="#">
            <a className="link menu-1">HOME</a>
          </Link>
          <Link href="#">
            <a className="link menu-2">ABOUT</a>
          </Link>
        </div>
        <div className="menu-logo">
        <Link href="/">
            <a className="logo menu-3">
              <Image
                src={logo}
                alt="Logo of the site"
              />
            </a>
          </Link>
        </div>
        <div className="menu-right">
          <Link href="#">
            <a className="link menu-4">WORKS</a>
          </Link>
          <Link href="#">
            <a className="link menu-5">GET IN TOUCH</a>
          </Link>
        </div>
      </header>

      {/* BACKGROUND HERO */}

      {/* <div className="relative"> */}

        <div className="bg-hero">
          <svg className="svg-hero" viewBox="0 0 2400 1350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="bg-hero" clip-path="url(#clip0)">
          <g id="Vector 8" filter="url(#filter0_f)">
          <path d="M1768.22 604.445C1724.11 584.706 1673.56 601.579 1341.78 604.445C1010.01 607.31 1722.27 757.892 1768.22 755.982C1814.17 754.072 1812.34 624.183 1768.22 604.445Z" fill="#00AAE0"/>
          </g>
          <g id="Vector 7" filter="url(#filter1_f)">
          <path d="M496.413 869.775C382.905 841.772 351.122 710.512 496.413 749.015C641.703 787.518 655.324 826.021 970.879 869.775C1286.43 913.528 609.921 897.777 496.413 869.775Z" fill="#00AAE0"/>
          </g>
          <path id="bg-hero-line3" d="M0 1080C386.046 734.463 586.046 615.794 1204.65 566.93C1823.26 518.066 2051.16 458.732 2400 183" stroke="url(#paint0_linear)" stroke-opacity="0.41"/>
          <path id="bg-hero-line2" d="M0 742C893.023 446.547 906.977 470.503 1344.19 538.377C1781.4 606.251 1832.56 614.237 2400 518.414" stroke="url(#paint1_linear)" stroke-opacity="0.21"/>
          <path id="bg-hero-line1" d="M0 242.549C625.891 170.501 824.015 258.56 1089.68 486.71C1355.35 714.86 1571.48 882.971 2400 927" stroke="url(#paint2_linear)" stroke-opacity="0.39"/>
          <rect id="Rectangle 14" x="403.41" y="757" width="16" height="16" transform="rotate(16 403.41 757)" fill="url(#paint3_linear)"/>
          <rect id="Rectangle 15" x="550.595" y="219" width="12" height="12" transform="rotate(62 550.595 219)" fill="url(#paint4_linear)"/>
          <rect id="Rectangle 16" x="1908.55" y="573.224" width="18" height="18" transform="rotate(39 1908.55 573.224)" fill="url(#paint5_linear)"/>
          </g>
          <defs>
          <filter id="filter0_f" x="754" y="95" width="1548" height="1161" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur"/>
          </filter>
          <filter id="filter1_f" x="-103" y="240" width="1659" height="1159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="251" result="effect1_foregroundBlur"/>
          </filter>
          <linearGradient id="paint0_linear" x1="1200" y1="183" x2="1200" y2="1080" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00AAE0"/>
          <stop offset="1" stop-color="#00AAE0" stop-opacity="0.38"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="2465.12" y1="495.457" x2="-85.4322" y2="572.649" gradientUnits="userSpaceOnUse">
          <stop offset="0.677083" stop-color="#00AAE0" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#00AAE0" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="1200" y1="231.873" x2="1200" y2="927" gradientUnits="userSpaceOnUse">
          <stop offset="0.583333" stop-color="#00AAE0" stop-opacity="0.74"/>
          <stop offset="1" stop-color="#00AAE0" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear" x1="419.41" y1="757" x2="400.882" y2="769.142" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C2FF"/>
          <stop offset="1" stop-color="#B9B9B9" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint4_linear" x1="562.595" y1="219" x2="548.699" y2="228.107" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C2FF"/>
          <stop offset="1" stop-color="#B9B9B9" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint5_linear" x1="1926.55" y1="573.224" x2="1905.71" y2="586.884" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C2FF"/>
          <stop offset="1" stop-color="#B9B9B9" stop-opacity="0"/>
          </linearGradient>
          <clipPath id="clip0">
          <rect width="2400" height="1350" fill="white"/>
          </clipPath>
          </defs>
          </svg>


        </div>

      {/* </div> */}

      {/* CONTAINER */}

      <section className="container hero">
        <div className="container-item">
          <h1>Teilor S. Barcelos</h1>
          <h2 className="mask text-right mt-3">Web Developer</h2>
          <h2 className="mask text-center">Front & Back-end Programming</h2>
          <div className="flex-end pr-9">
            <Link href="#">
              <a className="square">
                {/* <Image
                  src={square}
                  alt="Works button"
                /> */}
                WORKS
              </a>
            </Link>
          </div>
        </div>
        <div className="container-item">
          <div className="img-hero">
            <Image
              src={imgHero}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}

      <section className="list">
        <div className="list-item">
          <h2>Selected Works</h2>
        </div>

        <div className="list-item py-6">
          <h5>01.</h5>
          <Link href="https://letmeask-f38c5.web.app/">
            <a target="_blank">
              <h3>Letmeask</h3>
            </a>
          </Link>
          <div className="work-img">
            <Image
              src={imgLetmeask}
              alt="Letmeask image"
            />
          </div>
        </div>

        <div className="bb-gray"></div>

        <div className="list-item py-6">
          <h5>02.</h5>
          <Link href="https://devdotfinance.web.app/">
            <a target="_blank">
              <h3>Devdotfinance</h3>
            </a>
          </Link>
          <div className="work-img">
            <Image
              src={imgDevdotfinance}
              alt="Devdotfinance image"
            />
          </div>
        </div>
      </section>

      <section className="get mt-9">
        <h2>Get in touch</h2>
        <h3 className="mask mt-9 text-center">tsb.developer87@gmail.com</h3>
      </section>
      
    </div>
  )
}
