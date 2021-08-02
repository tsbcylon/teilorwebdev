import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function About() {
    
    if(typeof window !== 'undefined'){
        document.addEventListener('DOMContentLoaded', () => {

            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo('#about div', {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: '#about'
                },
                duration: 1,
                opacity: 1,
                y: 0,
                stagger: {each: .3},
                delay: .7,
            })
        })
    }

    return (
        <section className="about in-front mt-9" id="about">
            <div className="about-item">
                <h2>About Me</h2>
            </div>
            <div className="about-item">
                <h4 className="mask mt-3">Hello, I'm Teilor Souza Barcelos, Brazilian, resident in Criciúma - SC, a truly passionate about technology, web development & front and back-end programming.</h4>
                <h3 className="mt-3">Some technologies that I know:</h3>
            </div>
            <div className="technologies mt-3">
                
                <div className="technologies-item">
                    <Link href="https://github.com/teilorbarcelos">
                        <a target="_blank">
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='ionicon right-on-hover right-on-hover'
                                viewBox='0 0 512 512'>
                                
                                <defs>
                                    <linearGradient id="Gradient" gradientTransform="rotate(135)">
                                    <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                                    <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                                    </linearGradient>
                                </defs>

                                <title>Github</title>
                                <path
                                    d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'
                                    fill="url('#Gradient')"
                                    stroke="#edeff0"
                                />
                            </svg>
                        </a>
                    </Link>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Html5</title>
                        <path
                            d='M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Javascript</title>
                        <path
                            d='M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>ReactJS</title>
                        <path
                            d='M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                        <path d='M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Sass</title>
                        <path
                            d='M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ionicon right-on-hover'
                    viewBox='0 0 512 512'
                >
                        
                    <defs>
                        <linearGradient id="Gradient" gradientTransform="rotate(135)">
                        <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                        <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                        </linearGradient>
                    </defs>

                    <title>VueJS</title>
                    <path
                        d='M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z'
                        fill="url('#Gradient')"
                        stroke="#edeff0"
                    />
                    <path d='M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z'
                        fill="url('#Gradient')"
                        stroke="#edeff0"
                    />
                </svg>
            </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Laravel</title>
                        <path
                            d='M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78 39.78 0 00-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06 1.5-28.14 4.48-14 2.29-35.11 5.77-38.31 6.07l-.71.06-.69.13c-10 1.78-16.62 6.22-19.56 13.19-1.55 3.68-3.22 11.15 2.94 19.86 1.53 2.22 6.83 9.56 15.94 22.17 6.06 8.4 12.87 17.82 18.75 26L259.9 275 150.66 96.05l-.2-.34-.23-.33-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11-4.6.25-21.42 1.57-40.89 3.11-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0032.94 21.59 46.62 46.62 0 009.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59 1.9 3.32 3.9 6.83 6 10.44 21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4 1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54 17.37-4.5 38.8-10.11 43.38-11.55 11.47-3.43 14.94-10.69 16-14.73.79-3.15 1.82-11.2-5.9-18.85zm-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9-6.67-13.34-19.74-39.65-32.5-65.33-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57 16.76 28.26 74.32 125.3 96.3 162.3zM427.58 172zM310.06 416.4zm53.67-56.95c-24.21 8-37.33 12.37-44.42 14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93-18.07 6.04-48.2 16.02-72.27 24zm55.87-121.63l-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88 11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 512 512'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Python</title>
                        <path
                            d='M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                        <path
                            d='M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z'
                            fill="url('#Gradient')"
                            stroke="#edeff0"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 64 64'
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="40%"  stop-color="#000" stopOpacity=".6" />
                            </linearGradient>
                        </defs>

                        <title>Typescript</title>
                        <path
                            d='M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z'
                            fill="url('#Gradient')"
                        />
                    </svg>
                </div>
                <div className="technologies-item">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ionicon right-on-hover'
                        viewBox='0 0 108.758 144.133'
                        // width="108.758" height="144.133"
                    >
                            
                        <defs>
                            <linearGradient id="Gradient" gradientTransform="rotate(135)">
                            <stop offset="1%"  stop-color="#15aed4" stopOpacity=".8" />
                            <stop offset="99%"  stop-color="#000" stopOpacity=".8" />
                            </linearGradient>
                        </defs>

                        <title>Linux</title>
                        <path fill="url('#Gradient')" d="M60.969,47.645c-1.494,0.02,0.281,0.768,2.232,1.069     c0.541-0.422,1.027-0.846,1.463-1.26C63.451,47.751,62.215,47.758,60.969,47.645"/>
                        <path fill="url('#Gradient')" d="M68.986,45.646c0.893-1.229,1.541-2.573,1.77-3.963     c-0.201,0.99-0.736,1.845-1.244,2.749c-2.793,1.759-0.264-1.044-0.002-2.111C66.508,46.104,69.096,44.589,68.986,45.646"/>
                        <path fill="url('#Gradient')" d="M71.949,37.942c0.182-2.691-0.529-1.839-0.768-0.814     C71.459,37.274,71.68,39.026,71.949,37.942"/>
                        <path fill="url('#Gradient')" d="M55.301,1.163c0.798,0.142,1.724,0.252,1.591,0.443     C57.768,1.413,57.965,1.239,55.301,1.163"/>
                        <path fill="url('#Gradient')" d="M56.893,1.606l-0.561,0.117l0.523-0.048L56.893,1.606"/>
                        <path fill="url('#Gradient')" d="M81.762,38.962c0.09,2.416-0.705,3.59-1.424,5.666l-1.293,0.643     c-1.057,2.054,0.105,1.304-0.652,2.937c-1.652,1.467-5.006,4.589-6.08,4.875c-0.785-0.017,0.531-0.926,0.703-1.281     c-2.209,1.516-1.773,2.276-5.152,3.199l-0.098-0.221c-8.33,3.92-19.902-3.847-19.75-14.443c-0.088,0.672-0.253,0.504-0.437,0.774     c-0.43-5.451,2.518-10.926,7.49-13.165c4.863-2.406,10.564-1.42,14.045,1.829c-1.912-2.506-5.721-5.163-10.232-4.917     c-4.421,0.072-8.558,2.881-9.938,5.932c-2.264,1.425-2.528,5.496-3.514,6.242c-1.329,9.76,2.497,13.975,8.97,18.936     c1.016,0.686,0.286,0.791,0.422,1.313c-2.15-1.006-4.118-2.526-5.738-4.387c0.86,1.257,1.787,2.479,2.986,3.439     c-2.029-0.685-4.738-4.913-5.527-5.085c3.495,6.258,14.178,10.975,19.775,8.634c-2.59,0.096-5.879,0.053-8.787-1.022     c-1.225-0.629-2.884-1.93-2.587-2.173c7.636,2.851,15.522,2.158,22.128-3.137c1.682-1.31,3.518-3.537,4.049-3.567     c-0.799,1.202,0.137,0.578-0.477,1.639c1.672-2.701-0.729-1.1,1.73-4.664l0.908,1.25c-0.34-2.244,2.785-4.966,2.467-8.512     c0.717-1.084,0.799,1.168,0.039,3.662c1.055-2.767,0.279-3.212,0.549-5.496c0.291,0.768,0.678,1.583,0.875,2.394     c-0.688-2.675,0.703-4.503,1.049-6.058c-0.342-0.15-1.061,1.182-1.227-1.976c0.025-1.372,0.383-0.719,0.52-1.057     c-0.268-0.155-0.975-1.207-1.404-3.224c0.309-0.475,0.832,1.229,1.256,1.298c-0.273-1.603-0.742-2.826-0.762-4.057     c-1.24-2.59-0.439,0.346-1.443-1.112c-1.32-4.114,1.094-0.955,1.258-2.823c1.998,2.895,3.137,7.385,3.662,9.244     c-0.4-2.267-1.045-4.464-1.834-6.589c0.609,0.257-0.979-4.663,0.791-1.405c-1.889-6.945-8.078-13.435-13.773-16.479     c0.695,0.637,1.574,1.437,1.26,1.563c-2.834-1.685-2.336-1.818-2.742-2.53c-2.305-0.939-2.459,0.077-3.984,0.002     c-4.35-2.308-5.188-2.063-9.191-3.507l0.182,0.852c-2.881-0.96-3.357,0.362-6.47,0.002c-0.189-0.147,0.998-0.536,1.976-0.677     c-2.786,0.368-2.656-0.55-5.382,0.101c0.671-0.471,1.383-0.784,2.099-1.184c-2.271,0.138-5.424,1.322-4.451,0.244     c-3.705,1.654-10.286,3.975-13.979,7.438l-0.116-0.776c-1.692,2.031-7.379,6.066-7.832,8.699l-0.453,0.105     c-0.879,1.491-1.45,3.18-2.148,4.713c-1.151,1.963-1.688,0.756-1.524,1.064c-2.265,4.592-3.392,8.45-4.363,11.616     c0.692,1.035,0.017,6.232,0.278,10.391c-1.136,20.544,14.418,40.489,31.42,45.093c2.492,0.893,6.197,0.861,9.349,0.949     c-3.718-1.064-4.198-0.563-7.822-1.826c-2.613-1.232-3.185-2.637-5.037-4.244l0.733,1.295c-3.63-1.285-2.111-1.59-5.065-2.525     l0.783-1.021c-1.177-0.09-3.117-1.982-3.647-3.033l-1.288,0.051c-1.546-1.906-2.371-3.283-2.31-4.35l-0.416,0.742     c-0.471-0.809-5.691-7.158-2.983-5.68c-0.503-0.458-1.172-0.747-1.897-2.066l0.551-0.629c-1.301-1.677-2.398-3.826-2.314-4.542     c0.695,0.938,1.177,1.114,1.655,1.275c-3.291-8.164-3.476-0.449-5.967-8.31l0.526-0.042c-0.403-0.611-0.65-1.27-0.974-1.919     l0.23-2.285c-2.368-2.736-0.662-11.645-0.319-16.53c0.235-1.986,1.977-4.101,3.3-7.418l-0.806-0.138     c1.542-2.688,8.802-10.799,12.166-10.383c1.629-2.046-0.324-0.008-0.643-0.522c3.579-3.703,4.704-2.616,7.119-3.283     c2.603-1.545-2.235,0.604-1.001-0.589c4.503-1.149,3.19-2.614,9.063-3.197c0.62,0.352-1.437,0.544-1.953,1.001     c3.75-1.836,11.869-1.417,17.145,1.018c6.117,2.861,12.994,11.314,13.266,19.267l0.309,0.083     c-0.156,3.162,0.484,6.819-0.627,10.177L81.762,38.962"/>
                        <path fill="url('#Gradient')" d="M44.658,49.695l-0.211,1.047c0.983,1.335,1.763,2.781,3.016,3.821     C46.561,52.804,45.892,52.077,44.658,49.695"/>
                        <path fill="url('#Gradient')" d="M46.979,49.605c-0.52-0.576-0.826-1.268-1.172-1.956     c0.33,1.211,1.006,2.252,1.633,3.312L46.979,49.605"/>
                        <path fill="url('#Gradient')" d="M88.063,40.675l-0.219,0.552c-0.402,2.858-1.273,5.686-2.605,8.309     C86.711,46.769,87.66,43.742,88.063,40.675"/>
                        <path fill="url('#Gradient')" d="M55.598,0.446C56.607,0.077,58.08,0.243,59.154,0c-1.398,0.117-2.789,0.187-4.162,0.362     L55.598,0.446"/>
                        <path fill="url('#Gradient')" d="M20.127,19.308c0.233,2.154-1.62,2.991,0.41,1.569     C21.627,18.423,20.113,20.2,20.127,19.308"/>
                        <path fill="url('#Gradient')" d="M17.739,29.282c0.469-1.437,0.553-2.299,0.732-3.132     C17.178,27.804,17.875,28.157,17.739,29.282"/>
                        <path fill="url('#Gradient')" d="M13.437,125.506c-0.045,0.047-0.045,7.506-0.138,9.453c-0.092,1.574-0.232,4.957-3.568,4.957     c-3.429,0-4.263-3.939-4.541-5.652c-0.324-1.9-0.324-3.477-0.324-4.17c0-2.225,0.139-8.436,5.375-8.436     c1.576,0,2.456,0.465,3.151,0.834L13.437,125.506z M0,130.975c0,13.066,6.951,13.066,7.97,13.066     c2.873,0,4.727-1.576,5.514-4.309l0.093,4.123c0.881-0.047,1.761-0.139,3.197-0.139c0.51,0,0.926,0,1.298,0.047     c0.371,0,0.741,0.045,1.158,0.092c-0.741-1.482-1.297-4.818-1.297-12.049c0-7.043,0-18.951,0.602-22.566     c-1.667,0.789-3.105,1.299-6.256,1.576c1.251,1.344,1.251,2.039,1.251,8.154c-0.879-0.277-1.992-0.602-3.892-0.602     C1.344,118.369,0,125.598,0,130.975"/>
                        <path fill="url('#Gradient')" d="M25.13,128.609c0.047-3.846,0.835-7.275,4.124-7.275c3.615,0,3.891,3.984,3.799,7.275H25.13z      M37.64,129.074c0-5.422-1.065-10.752-7.923-10.752c-9.452,0-9.452,10.475-9.452,12.697c0,9.406,4.216,13.113,11.306,13.113     c3.149,0,4.68-0.461,5.514-0.695c-0.046-1.668,0.185-2.734,0.465-4.17c-0.975,0.604-2.226,1.391-5.006,1.391     c-7.229,0-7.322-6.582-7.322-8.852H37.55L37.64,129.074"/>
                        <path fill="url('#Gradient')" d="M52.715,131.066c0,4.309-0.787,10.102-6.162,10.102c-0.742,0-1.668-0.141-2.27-0.279     c-0.093-1.668-0.093-4.541-0.093-7.877c0-3.986,0.416-6.068,0.742-7.09c0.972-3.289,3.15-3.334,3.566-3.334     C52.02,122.588,52.715,127.453,52.715,131.066z M39.417,136.117c0,3.43,0,5.375-0.556,6.857c1.9,0.742,4.262,1.158,7.09,1.158     c1.807,0,7.043,0,9.869-5.791c1.344-2.688,1.807-6.303,1.807-9.037c0-1.668-0.186-5.328-1.529-7.646     c-1.296-2.176-3.382-3.289-5.605-3.289c-4.449,0-5.746,3.707-6.44,5.607c0-2.363,0.045-10.611,0.415-14.828     c-3.011,1.391-4.866,1.621-6.857,1.807c1.807,0.74,1.807,3.801,1.807,13.764V136.117"/>
                        <path fill="url('#Gradient')" d="M66.535,143.855c-0.928-0.139-1.578-0.232-2.922-0.232c-1.48,0-2.502,0.094-3.566,0.232     c0.463-0.881,0.648-1.299,0.787-4.309c0.186-4.125,0.232-15.154-0.092-17.471c-0.232-1.762-0.648-2.039-1.297-2.502     c3.799-0.371,4.865-0.648,6.625-1.482c-0.369,2.037-0.418,3.059-0.418,6.162C65.561,140.242,65.514,141.955,66.535,143.855"/>
                        <path fill="url('#Gradient')" d="M81.373,130.74c-0.092,2.92-0.139,4.959-0.928,6.58c-0.973,2.086-2.594,2.688-3.799,2.688     c-2.783,0-3.383-2.316-3.383-4.586c0-4.355,3.893-4.682,5.652-4.682H81.373z M68.629,136.441c0,2.92,0.881,5.838,3.477,7.09     c1.158,0.51,2.316,0.51,2.688,0.51c4.264,0,5.699-3.152,6.58-5.098c-0.047,2.039,0,3.289,0.139,4.912     c0.834-0.047,1.668-0.139,3.059-0.139c0.787,0,1.529,0.092,2.316,0.139c-0.51-0.787-0.787-1.252-0.928-3.059     c-0.092-1.76-0.092-3.521-0.092-5.977l0.047-9.453c0-3.523-0.928-6.998-7.879-6.998c-4.586,0-7.273,1.391-8.617,2.086     c0.557,1.02,1.02,1.898,1.436,3.893c1.809-1.576,4.172-2.41,6.58-2.41c3.848,0,3.848,2.549,3.848,6.162     c-0.881-0.045-1.623-0.137-2.875-0.137C72.521,127.963,68.629,130.23,68.629,136.441"/>
                        <path fill="url('#Gradient')" d="M108.063,139.268c0.047,1.576,0.047,3.244,0.695,4.588c-1.021-0.092-1.623-0.232-3.521-0.232     c-1.113,0-1.715,0.094-2.596,0.232c0.184-0.602,0.279-0.834,0.371-1.623c0.139-1.064,0.232-4.633,0.232-5.885v-5.004     c0-2.178,0-5.33-0.141-6.441c-0.092-0.787-0.322-2.918-3.012-2.918c-2.641,0-3.521,1.945-3.846,3.521     c-0.369,1.621-0.369,3.383-0.369,10.24c0.045,5.932,0.045,6.486,0.508,8.109c-0.787-0.092-1.76-0.184-3.15-0.184     c-1.113,0-1.854,0.045-2.779,0.184c0.324-0.742,0.51-1.113,0.602-3.707c0.094-2.549,0.279-15.061-0.141-18.025     c-0.23-1.809-0.695-2.225-1.203-2.688c3.754-0.186,4.957-0.789,6.117-1.389v4.91c0.555-1.438,1.713-4.635,6.348-4.635     c5.793,0,5.838,4.217,5.885,6.996V139.268"/>
                        <path fill="url('#Gradient')" d="M66.926,111.533l-3.838,3.836l-3.836-3.836l3.836-3.836L66.926,111.533"/>
                    </svg>
                </div>
                
            </div>
        </section>
    )
}