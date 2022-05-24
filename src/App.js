import React from 'react';
import './App.css';

import heroSidebar from './images/heroSidebar.svg'
import html5Logo from "./images/tools/bxl-html5.svg"
import javaScriptLogo from "./images/tools/bxl-javascript.svg"
import pythonLogo from "./images/tools/bxl-python.svg"
import tailwindLogo from "./images/tools/bxl-tailwind-css.svg"
import unityLogo from "./images/tools/bxl-unity.svg"
import userIcon from './images/bx-user.svg'
import arrowRight from './images/bx-chevron-right.svg'
import arrowLeft from './images/bx-chevron-left.svg'
import reactLogo from './images/tools/bxl-react.svg'
import starLogo from './images/bxs-star.svg'
import bippy from './images/projects/bippy.png'
import fiverr from './images/projects/fiverr.png'
import ib from './images/projects/IB.png'
import itchio from './images/projects/itchio.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <MyTools />
      <Education />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
}

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewIndex: 0,
    };
  }

  changeRight = () => {
    let change = this.state.reviewIndex === 4 ? 4 : this.state.reviewIndex += 1;
    this.setState({ reviewIndex : change });
  }

  changeLeft = () => {
    let change = this.state.reviewIndex === 0 ? 0 : this.state.reviewIndex -= 1;
    this.setState({ reviewIndex : change });
  }

  render() {
    const reviews = [
      ['Littlegene', 'Nothing is too much trouble for Carsen very helpful and he kept me updated throughout. Would highly recommend him.'],
      ['Slinefish', "You never know what you will get on Fiver... but Carsen it's exceptional service, communication and understanding. Top service, can't recommend the service enough. For future work, I know where I'll be going. Thank You for all the help!"],
      ['Cannibalbob', "Carsen was great! He worked with me through several revisions to get the game right at a cost that didn't exceed my budget. He was also very prompt and efficient to my schedule. I'll definitely work with him again in the future! A+"],
      ['Mtbrad82', "I needed help with a project last minute with a 25 hour deadline. With his help was able to finish in 5 hours."],
      ["Innovator's Box", "I'm so excited about the game we have developed! I had a very specific vision with our card games to create something magical, creative, and seamless and not only has Carsen completed it but also continued to share customer support if I had any. I interviewed a lot of other potential candidates for this project and I am so glad that we found him to work on this. His honesty and care really stood out and the result is showing. Can't wait to get this launching soon. Thank you! Highly recommend working with Carsen!"]
    ]
    return (
      <div className='flex flex-row w-full bg-eerieBlack' style={ { height: '65vh' } }>
        <div className='flex w-2/12 h-full justify-end'>
          <button><img src={arrowLeft} onClick={this.changeLeft}/></button>
        </div>

        <div className='flex w-8/12 h-full justify-center items-center'>
          <div className='flex w-3/4 h-3/4'>
            <div className='flex flex-col w-1/4 h-full'>
              <div className='flex w-full h-1/2 items-end justify-center'>
                <img src={userIcon} className='h-3/4'/>
              </div>

              <div className='flex w-full h-1/2 justify-center items-start'>
                <p className='text-antiqueWhite text-3xl text-center font-semibold font-ver'>{reviews[this.state.reviewIndex][0]}</p>
              </div>
            </div>

            <div className='flex flex-col w-3/4 h-full'>
              <div className='flex w-full h-1/4'>
                <h1 className='flex flex-row pl-8 items-end'>
                  <img src={starLogo} className='w-12'/>
                  <img src={starLogo} className='w-12'/>
                  <img src={starLogo} className='w-12'/>
                  <img src={starLogo} className='w-12'/>
                  <img src={starLogo} className='w-12'/>
                </h1>
              </div>

              <div className='flex w-full h-3/4 justify-start items-center'>
                <h1 className='pl-10 pb-5 text-antiqueWhite font-ver font-semibold' style={ { fontSize: "2vh" } }>"{reviews[this.state.reviewIndex][1]}"</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-2/12 h-full justify-start'>
        <button><img src={arrowRight} onClick={this.changeRight}/></button>
        </div>
      </div>
    )
  }
}

function NavBar() {
  return (
    <div className='flex fixed w-full h-20 bg-eerieBlack justify-center items-center z-50'>
      <div className='flex flex-row w-3/4 h-full text-antiqueWhite'>
        <div className='flex w-1/2 h-full justify-start items-center'>
          <a href='https://github.com/AsterinoCarsen/portfolio_source' target="_blank" className='hover:-translate-y-1 hover:scale-105 duration-200'>Made with <span className='text-red'>❤</span>, by Carsen Asterino, on GitHub</a>
        </div>
        
        <div className='flex w-1/2 h-full justify-end items-center'>
          <a href='#home'><p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Home</p></a>
          <a href='#aboutme'><p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>About</p></a>
          <a href='#education'><p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Education</p></a>
          <a href='#projects'><p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Projects</p></a>
          <a href='#contact'><p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Contact</p></a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className='flex w-full bg-eerieBlack justify-center items-center overflow-y-clip' style={ { height: "55vh"} } id='home'>
      <div className='flex w-3/4 h-full justify-center items-center'>
        <div className='flex-row w-1/2 justify-start font-ver text-antiqueWhite'>
          <p className='font-thin pb-2'>WELCOME TO MY WORLD</p>
          <h1 className='text-5xl font-bold'>Hello, I'm <span className='text-oldRose'>Carsen.</span></h1>
          <p className='pt-6 text-base'>I'm a passionate, self-taught developer, who works in several different disciplines, motivated by my curiosity. My areas of expertise are in Front-End development using React and TailwindCSS. Additionally, I'm highly proficient with Unity 2D game development in C#.</p>
        </div>

        <div className='flex w-1/2 justify-end items-center'>
          <img src={heroSidebar} alt='hero' width={450} className="object-scale-down"/>
        </div>
      </div>
    </div>
  )
}

function MyTools() {
  return (
    <div className='flex flex-col w-full bg-eerieBlack justify-center items-center overflow-y-clip' style={ { height: "65vh" }}>
      <h1 className='pb-20 text-antiqueWhite text-5xl font-ver font-bold'>Tools I Use</h1>
      <div className='flex flex-col'>
        <div className='flex gap-48 w-full h-1/2 pb-32'>
          <a rel='noreferrer' href='https://tailwindcss.com/' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={tailwindLogo} alt='tailwind'/></a>
          <a rel='noreferrer' href='https://unity.com/' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={unityLogo} alt='unity'/></a>
          <a rel='noreferrer' href='https://reactjs.org/' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={reactLogo} alt='react'/></a>
        </div>

        <div className='flex gap-48 w-full h-1/2'>
          <a rel='noreferrer' href='https://en.wikipedia.org/wiki/HTML5' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={html5Logo} alt='html5'/></a>
          <a rel='noreferrer' href='https://en.wikipedia.org/wiki/JavaScript' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={javaScriptLogo} alt='js'/></a>
          <a rel='noreferrer' href='https://www.python.org/' target="_blank" className='w-28 h-28 hover:-translate-y-1 hover:scale-105 duration-200'><img src={pythonLogo} alt='python'/></a>
        </div>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className='flex w-full items-center justify-center bg-blackCoffee' style={ { height: "65vh" } } id='education'>
      <div className='flex flex-col w-3/4 h-3/4 bg-eerieBlack rounded-lg p-12 drop-shadow-2xl'>
        <h1 className='text-4xl font-bold font-ver text-antiqueWhite pb-2 border-b border-eerieBlackLight'>Education</h1>
        <div className='flex flex-row h-1/2 w-full border-b border-eerieBlackLight'>
          <div className='flex flex-col h-full w-1/2 justify-center'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-semibold'>Spokane Falls Community College</h1>
            <p className='font-ver text-sm text-gray'>September 2020 - June 2022</p>
            <p className='font-ver text-sm text-gray'>GPA 3.5</p>
          </div>

          <div className='flex flex-col h-full w-1/2 justify-center items-start'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-bold'>Associate's in Arts AA-DTA</h1>
            <p className='font-ver text-sm text-gray'>Related Coursework: MATH&147, BUS&201, ENGL&235</p>
          </div>
        </div>

        <div className='flex h-1/2 w-full'>
          <div className='flex flex-col h-full w-1/2 justify-center'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-semibold'>Arizona State University</h1>
            <p className='font-ver text-sm text-gray'>June 2022 - Present</p>
            <p className='font-ver text-sm text-gray'>GPA TBD</p>
          </div>

          <div className='flex flex-col h-full w-1/2 justify-center items-start'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-bold'>Bachelor's of Science in Software Engineering</h1>
            <p className='font-ver text-sm text-gray'>Related Coursework: CSE 110, SER 401, MATH 275</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='flex flex-col w-full bg-blackCoffee' style={ { height: "100vh" } } id='projects'>
      <div className='flex w-full h-1/6 items-center justify-center'><h1 className='font-ver text-antiqueWhite text-5xl font-bold'>My Projects</h1></div>

      <div className='grid grid-rows-2 grid-cols-2 w-full h-full p-10 pl-64 pr-64 gap-10 '>

        <div className='flex w-auto h-auto hover:-translate-y-1 hover:scale-105 duration-200' style={ { backgroundImage: `url(${fiverr})` } }>
          <a href='https://www.fiverr.com/carsen_asterino?public_mode=true' target="_blank" className='w-full h-full'>
            <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 justify-center items-center'>
              <h1 className='pb-4 font-ver text-antiqueWhite font-semibold' style={ { fontSize: "7vh" } }>Fiverr</h1>
            </div>
          </a>
        </div>

        <div className='flex w-auto h-auto hover:-translate-y-1 hover:scale-105 duration-200' style={ { backgroundImage: `url(${ib})` } }>
          <a href='https://game.innovatorsbox.com/' target="_blank" className='w-full h-full'>
            <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 justify-center items-center'>
              <h1 className='pb-4 font-ver text-antiqueWhite font-semibold text-center overflow-hidden' style={ { fontSize: "7vh" } }>Innovator's Box</h1>
            </div>
          </a>
        </div>

        <div className='flex w-auto h-auto hover:-translate-y-1 hover:scale-105 duration-200' style={ { backgroundImage: `url(${bippy})` } }>
          <a href='https://carsen.itch.io/bippy' target="_blank" className='w-full h-full'>
            <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 justify-center items-center'>
              <h1 className='pb-4 font-ver text-antiqueWhite font-semibold' style={ { fontSize: "7vh" } }>Bippy</h1>
            </div>
          </a>
        </div>

        <div className='flex w-auto h-auto hover:-translate-y-1 hover:scale-105 duration-200' style={ { backgroundImage: `url(${itchio})` } }>
          <a href='https://carsen.itch.io/' target="_blank" className='w-full h-full'>
            <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 justify-center items-center'>
              <h1 className='pb-4 font-ver text-antiqueWhite font-semibold' style={ { fontSize: "7vh" } }>Itch.io</h1>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className='flex flex-col h-48 w-full bg-eerieBlack items-center' id='contact'>
      <h1 className='font-ver w-3/4 text-2xl text-antiqueWhite text-center font-semibold pt-5 pb-5 border-b border-eerieBlackLight'>Get in touch</h1>
      <div className='flex flex-row justify-around items-center w-full h-full bg-eerieBlack text-red'>
        <a href='mailto: carse.astro@gmail.com' target="_blank">carse.astro@gmail.com</a>
        <p>+1 (509) 993-6711</p>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className='flex w-full h-auto bg-blackCoffee justify-center pb-16' id='aboutme'>
      <div className='flex flex-col w-3/4 h-full'>
        <h1 className='font-ver font-bold text-antiqueWhite text-5xl text-center pt-10'>About Me</h1>
        <h2 className='text-left font-ver font-normal text-antiqueWhite text-3xl pt-14 pb-2 border-b-2 border-blackCoffeeLight'>Background</h2>
        <p className='text-left font-ver font-thin text-antiqueWhite text-lg pt-4 pb-2'>Over the last five years, I've honed my development skills via online resources and self-teaching.  Motivated by my curiosity, I've completed the following:</p>
        
        <div className='flex w-full h-auto pl-8 pt-2'>
          <ol class="relative border-l border-red">                  
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-red rounded-full mt-1.5 -left-1.5 border border-red"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray font-ver">March 2017</time>
              <h3 class="text-lg font-semibold text-antiqueWhite">Began learning mod-tools for popular video games</h3>
              <p class="mb-4 text-base font-normal text-gray font-ver">3D level design, scripting in custom languages.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-red rounded-full mt-1.5 -left-1.5 border border-red"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray font-ver">March 2018</time>
              <h3 class="text-lg font-semibold text-antiqueWhite">Learning of Unity 2D and C#</h3>
              <p class="mb-4 text-base font-normal text-gray font-ver">Using online courses and resources, I began to write my first real code in C# with Unity.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-red rounded-full mt-1.5 -left-1.5 border border-red"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray font-ver">January 2020</time>
              <h3 class="text-lg font-semibold text-antiqueWhite">Freelance development of Unity 2D games</h3>
              <p class="mb-4 text-base font-normal text-gray font-ver">Harnessing what I've learned the last two years, I started to write my first production code.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-red rounded-full mt-1.5 -left-1.5 border border-red"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray font-ver">February 2021</time>
              <h3 class="text-lg font-semibold text-antiqueWhite">Learning of HTML, JavaScript, and CSS</h3>
              <p class="mb-4 text-base font-normal text-gray font-ver">In order to expand my skillset, I decided to learn web development, starting with the basics.</p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-red rounded-full mt-1.5 -left-1.5 border border-red"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray font-ver">March 2022</time>
              <h3 class="text-lg font-semibold text-antiqueWhite">Learning of React and TailwindCSS</h3>
              <p class="mb-4 text-base font-normal text-gray font-ver">To take my web development skills to the next level, it was paramount to learn frameworks and libraries.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App;
