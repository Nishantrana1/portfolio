import '../App.css'
import {Typed} from 'react-typed';
import About from '../components/About'
import Skills from '../components/Skills'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Me from '../assets/photo2.png'

function Home() {

  return (
    <>
      <main className='relative min-h-screen w-full overflow-x-hidden'>
  <div className="flex flex-col-reverse md:flex-row w-full min-h-screen">

          <div className="flex flex-col items-center md:items-start justify-center md:px-50 relative bg-[#d7d7d7] w-full md:w-1/2 h-full z-10" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}>
            <div className='flex md:hidden mt-[-40px] mb-3 justify-center relative'>
  <img className="w-36 h-36 rounded-full object-cover border-8 border-black shadow-lg" src={Me} alt="" />
</div>





            <p className="text-2xl md:text-3xl font-bold py-2">Hi, I am</p>
<p className="text-4xl md:text-6xl font-bold">Nishant</p>
<p className="text-lg md:text-xl font-bold text-[#909090]">Arduino Developer</p>

            <a href="https://drive.google.com/file/d/..." className='w-full flexad' target='_blank'>
  <button className="bg-black text-white h-12 w-full font-bold text-xl rounded-2xl my-6">
    Download Resume
  </button>
</a>


            <div className="links flex space-x-7 md:space-x-5 my-2">
              <a href="https://github.com/Nishantrana1" target="_blank" ><img src={Github} alt="Github" className="h-10 " /></a>
              
              <a href="https://www.linkedin.com/in/nishant-6362652a4/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="h-10 " /></a>
              <a href="https://www.instagram.com/1nishant10_/" target="_blank" ><img src={Instagram} alt="Instagram" className="h-10 " /></a>
            </div>
          </div>
          <div className="relative hidden md:inline-block bg-black w-[70%] h-full -ml-[15%] z-0 " style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <img src={Me} alt="me" className='absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[85%] object-contain' />

          </div>
        </div>
      </main>
      <About />
      <Skills />
    </>
  )
}

export default Home