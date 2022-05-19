import React from 'react';
import './App.css';

import heroSidebar from './images/heroSidebar.svg'

import css5Logo from "./images/tools/bxl-css3.svg"
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MyTools />
      <Testimonials />
      <Education />
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
    <div className='flex w-full h-20 bg-eerieBlack justify-center items-center'>
      <div className='flex w-3/4 min-h-full justify-end items-center text-antiqueWhite'>
        <p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Home</p>
        <p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>About</p>
        <p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Education</p>
        <p className='pl-5 pr-5 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-200'>Portfolio</p>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className='flex w-full bg-eerieBlack justify-center items-center overflow-y-clip' style={ { height: "55vh"} }>
      <div className='flex w-3/4 h-full justify-center items-center'>
        <div className='flex-row w-1/2 justify-start font-ver text-antiqueWhite'>
          <p className='font-thin pb-2'>WELCOME TO MY WORLD</p>
          <h1 className='text-5xl font-bold'>Hello, I'm <span className='text-oldRose'>Carsen.</span></h1>
          <p className='pt-6 text-base'>Quickly design and customize responsive mobile-first sites with Tailwind, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
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
    <div className='flex flex-col w-full bg-blackCoffee justify-center items-center overflow-y-clip' style={ { height: "65vh" }}>
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
    <div className='flex w-full items-center justify-center bg-blackCoffee' style={ { height: "65vh" } }>
      <div className='flex flex-col w-3/4 h-3/4 bg-eerieBlack rounded-lg p-12'>
        <h1 className='text-4xl font-bold font-ver text-antiqueWhite border-b-2 border-white'>Education</h1>
        <div className='flex flex-row h-1/2 w-full border-b-2 border-white'>
          <div className='flex flex-col h-full w-1/2 justify-center'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-semibold'>Spokane Falls Community College</h1>
            <p className='font-ver text-sm text-gray'>September 2020 - June 2022</p>
            <p className='font-ver text-sm text-gray'>GPA 3.5</p>
          </div>

          <div className='flex flex-col h-full w-1/2 justify-center items-start'>
            <h1 className='font-ver text-1xl text-antiqueWhite font-bold'>Associate's in Arts AA-DTA</h1>
            <p className='font-ver text-sm text-gray'>Related Coursework: MATH&147, BUS&101, ENGL&235</p>
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

export default App;
