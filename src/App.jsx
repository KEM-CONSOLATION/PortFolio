import './App.css';
import Typewriter from 'typewriter-effect';
// import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { useEffect,useState } from 'react';
import { MailLineIcon,GithubLineIcon,TwitterLineIcon,ServiceLineIcon,ContactsLineIcon,HomeGearLineIcon,StickyNoteLineIcon,ReactjsFillIcon,NodeTreeIcon,DatabaseFillIcon,Menu1LineIcon,CloseLineIcon,PenNibFillIcon,CodeFillIcon,DribbbleFillIcon,FacebookFillIcon,InstagramFillIcon} from '../src/assets/icons'
import Work from '../src/assets/images/Works.jpeg'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';


function App() {
  const [open, setopen] = useState(true);

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    if (counter < 205) {
      setTimeout(() => {
        setCounter(counter+1);
      }, 10);
    }
  }, [counter]);

  useEffect(() => {
    if (counter2 < 3) {
      setTimeout(() => {
        setCounter2(counter2 + 0.5);
      },30);
    }
  }, [counter2]);


//   <TypeWriterEffect
//   textStyle={{ fontFamily: 'Red Hat Display' }}
//   startDelay={100}
//   cursorColor="black"
//   text="Text for typewriting effect here"
//   typeSpeed={100}
//   eraseSpeed={100}
// />
 
    // const {text} = useTypewriter({
    //   words: ['Developer', 'Designer','Digital'],
    //   loop: {},
    //   typeSpeed: 120,
    //   deleteSpeed: 80,

    // });

  return (
    <>
    <div className="">
      <div className=" mx-auto max-w-6xl">
        <div className=" relative grid grid-flow-row md:flex md:justify-between gap-10 items-center  py-10  border-b-2  px-3 ">
          <div className="">
            <h1 className='text-3xl font-semibold cursor-pointer'>Consolation <span className=' text-green-500' >Lotachi</span> </h1>
          </div>


          {open === true 
          ? <div className=" absolute top-10 right-4 md:hidden cursor-pointer" onClick={() => setopen(false)}>
            <Menu1LineIcon size={35} />
          </div>

          :<div className=" absolute top-10 right-4 md:hidden cursor-pointer" onClick={() => setopen(true)}>
            <CloseLineIcon size={45} />
          </div>

            }
          
          <div className={`md:flex ${!open ? 'block':'hidden'}`}>
            <ul className=' md:flex gap-8 cursor-pointer font-semibold'>
              <li className='hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 '> <span className=''><HomeGearLineIcon className=' text-green-500 inline  items-center ' /></span> Works</li>
              <li className='hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 '> <span className=''><StickyNoteLineIcon className=' text-green-500 inline  items-center'/></span> Notes</li>
              <li className='hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 '> <span className=''><ContactsLineIcon className=' text-green-500 inline  items-center '/></span> Contacts</li>
              <li className='hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 '> <span className=''><ServiceLineIcon className=' text-green-500 inline  items-center'/></span> Services</li>
            </ul>
          </div>
          <div className={`lg:flex ${!open ? 'block':'hidden'}`}>
            <ul className=' flex gap-5 cursor-pointer font-semibold'>
              <li className='hover:text-green-500 py-2 px-3 md:py-0 md:px-0'><TwitterLineIcon className='text-blue-500 inline  items-center'/> Twitter</li>
              <li className='hover:text-green-500 py-2 px-3 md:py-0 md:px-0'><GithubLineIcon className='text-black-500  inline items-center'/> Github</li>
              <li className='hover:text-green-500 py-2 px-3 md:py-0 md:px-0'><MailLineIcon className='text-red-500  inline items-center' /> Mail</li>
            </ul>
          </div>
        </div>


        {/* Body content */}
        <div className=" max-w-5xl mx-auto">
          <div className=" grid grid-cols-1 mx-5 my-5 mt-10 md:flex md:items-center md:justify-between">
            <div className=" order-2 md:-order-none mt-10">
              <p className=' bg-green-500 inline px-5 py-3 font-semibold text-white rounded-md animate-pulse'>FrontEnd Developer</p>
              {/* <Typewriter
                options={{
                  strings: ['Hello', 'World'],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              <h1 className=' mt-10 text-5xl font-semibold text-green-900'>Talk is Cheap. <br /> Show me the code </h1>
              <p className=' mt-10'>I design and code beautifully simple things and I love what I do.</p>
              <div className=" mt-10 animate-bounce">
                <a href="#" className=' underline font-semibold text-green-500 text-2xl'>Let's Chat</a>
              </div>

              <div className=" flex gap-5 md:grid md:grid-cols-2">
                <div className=" flex items-center gap-1 mt-5 md:mt-19">
                  <h1 className=' text-3xl md:text-5xl font-semibold text-green-900'>{counter2}</h1>
                  <h1 className=' text-xs md:text-sm'>Years +<br /> Experience</h1>
                </div>
                <div className=" flex items-center gap-1 mt-5 md:mt-19">
                  <h1 className=' text-3xl md:text-5xl font-semibold text-green-900'>{counter} </h1>
                  <h1 className=' text-xs md:text-sm'>Project completed <br /> in 106 countries</h1>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center justify-center mb-10 md:mb-0 h-72 w-72 mx-auto md:mx-0 md:h-96 md:w-96 rounded-full bg-green-600 relative">
              
              {/* <div className=" grid items-center md:hidden  md:mt-19">
                <h1 className=' text-7xl md:text-5xl font-semibold text-white'>{counter2}</h1>
                <h1 className=' text-xs text-white md:text-sm'>Years +<br /> Experience</h1>
              </div> */}

              <div className=" grid items-center md:hidden mt-2 md:mt-19">
                <h1 className=' text-7xl md:text-5xl font-semibold text-white'>{counter} </h1>
                <h1 className=' text-xs font-semibold  text-white md:text-sm'>Project completed <br /> in 106 countries</h1>
              </div>

              <div className=" animate-spin shadow-2xl absolute top-0 right-0 bg-white rounded-full h-28 w-28 items-center flex justify-center text-[#61dbfb]">
                <ReactjsFillIcon size={60}/>
              </div>
              <div className=" animate-pulse shadow-2xl absolute bottom-0 right-0 bg-white rounded-full h-28 w-28 items-center flex justify-center text-green-500">
              <NodeTreeIcon size={60}/>
              </div>
              <div className=" animate-bounce shadow-2xl absolute left-[-40px] bottom-20 bg-white rounded-full h-28 w-28 items-center flex justify-center text-[#3FA037]">
                  <DatabaseFillIcon size={60}/>
              </div>
            </div>
          </div>
        </div>


        {/* Section Two */}
  
        <div className=" grid md:grid-cols-2 gap-10 md:gap-40 items-start mt-40 ">
          <div className=" grid grid-rows-3 gap-5 mx-5 md:mx-0 order-2 md:-order-none">
            <div className=" animate-bounce flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-400 px-10 py-5 shadow-md hover:text-white hover:bg-green-700 cursor-pointer">
              <div className=" grid grid-rows-1 gap-2">
                <p className=' text-2xl font-semibold'>Design</p>
                <p className=' text-sm'>Create Digital products with unique ideas</p>
                <p className=' text-xs font-bold underline'>20 Projects</p>
              </div>
              <div className=" bg-blue-400 rounded-full px-5 py-5 ">
                <PenNibFillIcon size={40}/>
              </div>
            </div>

            <div className="animate-bounce flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-400 px-10 py-5 shadow-md text-white hover:text-white hover:bg-blue-700 cursor-pointer">
              <div className=" grid grid-rows-1 gap-2">
                <p className=' text-2xl font-semibold'>FrontEnd Web Development</p>
                <p className=' text-sm'>I develop FrontEnd with coding, super smooth</p>
                <p className=' text-xs font-bold underline'>25 Projects</p>
              </div>
              <div className=" bg-red-400 rounded-full px-5 py-5 ">
                <CodeFillIcon size={40}/>
              </div>
            </div>

            <div className="animate-bounce flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-500 px-10 py-5 shadow-md text-white hover:text-white hover:bg-gray-700 cursor-pointer">
              <div className=" grid grid-rows-1 gap-2">
                <p className=' text-2xl font-semibold'>SEO</p>
                <p className=' text-sm'>Boost your online presense by SEO optimization</p>
                <p className=' text-xs font-bold underline'>20 Projects</p>
              </div>
              <div className=" bg-green-400 rounded-full px-5 py-5 ">
                <PenNibFillIcon size={40}/>
              </div>
            </div>
          </div>

          <div className=" mx-5">
            <p className=' text-slate-400 text-lg mb-7 '>Introduction</p>
            <p className=' text-4xl font-semibold mb-7'>Hello! I'm 
              <Typewriter
                onInit={(typewriter)=>{
                  typewriter.typeString('Hello Youtube').start();
                }}
              />  
            </p>
            <p className=' text-2xl italic font-medium text-slate-500 mb-7'>Every Great design begin with an even better story</p>
            <p className=' tracking-widest text-slate-70'>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
          </div>
        </div>

        {/* <div className=" max-w-4xl mx-auto mt-10 border-b-2">
          <h1 className=' text-4xl font-bold text-center text-slate-700'>Partners</h1>
          <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-6  py-5 ">
            <div className=" text-green-900 flex items-center justify-center">
              <GoogleFillIcon size={90} />
            </div>
            <div className=" text-red-500 flex items-center justify-center">
              <AmazonFillIcon size={90} />
            </div>
            <div className=" text-green-900 flex items-center justify-center">
              <GoogleFillIcon size={90} />
            </div>
            <div className=" text-red-500 flex items-center justify-center">
              <GoogleFillIcon size={90} />
            </div>
            <div className=" text-green-900 flex items-center justify-center">
              <GoogleFillIcon size={90} />
            </div>
            <div className=" text-red-500 flex items-center justify-center">
              <GoogleFillIcon size={90} />
            </div>
          </div>
        </div> */}
        

        <div className=" max-w-5xl mx-auto">
          <div className=" flex flex-col items-center justify-center md:flex md:flex-row gap-20 md:items-start  mt-3 md:mt-10 ">
            <div className="">
              <h1 className=' text-4xl italic text-green-900 font-bold'>Latest works</h1>
              <p className=' text-sm text-gray-500 mb-5 md:mb-20'>Perfect solutions for digital solutions</p>
              <div className=" max-w-xs  shadow-sm shadow-slate-400 p-5">
                <img src={Work} alt=""/>
              </div>

              <div className=" mt-5 md:mt-10 flex flex-col mb-5 md:mb-0 md:ml-20">
                <a href="/" className=' text-green-500 underline font-bold text-2xl uppercase mb-10'>All Projects</a>
                <p>Some projects not allowed due to NOA.</p>
                <p>If you want to see more, <a href="/" className=' underline text-green-500'>Contact</a></p>
              </div>
            </div>

            <div className=" grid grid-rows-1 gap-7">
              <div className=" max-w-xs shadow-sm shadow-slate-400 p-5">
                <img src={Work} alt=""/>
              </div>
              <div className=" max-w-xs shadow-sm shadow-slate-400 p-5">
                <img src={Work} alt=""/>
              </div>
              <div className=" max-w-xs shadow-sm shadow-slate-400 p-5">
                <img src={Work} alt=""/>
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className=" bg-gray-200">
        <div className="flex flex-col justify-center mx-10 md:mx-20 md:flex md:flex-row md:items-start md:mt-3 pt-10 md:justify-center md:gap-20">
          <div className="">
            <p className=' text-xl font-semibold mb-10'>Lets Make something amazing together</p>
            <p className=' text-lg font-medium'>Start by <a href="consolationlotachi@gmail.com" className=' text-green-500 underline'>Saying hi</a> </p>
          </div>

          <div className="">
            <p className=' text-sm text-gray-500 capitalize'>Information</p>
            <p className=' mb-10 text-sm text-gray-500'>Umuerim Nekede Owerri, Imo State Nigeria</p>
            
            <ul>
              <li className=' py-2 cursor-pointer hover:text-green-900 text-md'>Services</li>
              <li className=' py-2 cursor-pointer hover:text-green-900 text-md'>Works</li>
              <li className=' py-2 cursor-pointer hover:text-green-900 text-md'>Notes</li>
              <li className=' py-2 cursor-pointer hover:text-green-900 text-md'>Contact</li>
            </ul>
          </div>
        </div>
        

        <div className=" grid md:flex md:justify-between md:items-center mx-10 py-5">
          <div className=" grid md:flex md:items-end md:gap-10">
            <h1 className='text-2xl font-semibold cursor-pointer animate-bounce'>Consolation <span className=' text-green-500' >Lotachi</span> </h1>
          </div>

          <div className="">
            <p className=' text-gray-700'> Copyright 2023, All Rights Reserved</p>
          </div>

          <div className=" flex gap-3 mt-5 md:flex  md:gap-5 animate-bounce">
            <div className="py-3 px-3 text-white bg-blue-500 rounded-full ">
              <TwitterFillIcon className='' />
            </div>
            <div className="py-3 px-3 text-white bg-black rounded-full ">
              <GithubFillIcon className='' />
            </div>
            <div className="py-3 px-3 text-white bg-red-500 rounded-full ">
              <DribbbleFillIcon className='' />
            </div>
            <div className="py-3 px-3 text-white bg-blue-700 rounded-full">
              <FacebookFillIcon className='' />
            </div>
            <div className="py-3 px-3 text-white bg-pink-500 rounded-full">
              <InstagramFillIcon className='' />
            </div>
            
          </div>
        </div>
      </div>
    </div>


              
              {/* Motion Reduction */}
            {/* <button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
              Hover me
            </button> */}
    </>
  )
}

export default App
