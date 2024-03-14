import { CustomButton, CustomNavbar, CustomText } from './components'
import { downloadCV, openWhatsAppWindow } from './utils/contact-functions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { background_dark } from './utils/colors';
import profile from './assets/images/profile.jpg';

function App() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={`h-full flex flex-col `} style={{ background: background_dark }}>
      <CustomNavbar />
      <div className={`pt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='about'>
        <div className="" data-aos="fade-left">
          <div className="grid grid-cols-3 gap-4">
            <div className='col-span-2'>
              <h1 className="text-[#fff]  text-5xl font-bold ">I'm Ayoria<br /> <span className='animated-gradient-text'>Web Developer</span> </h1>
            </div>
            <div className='col-[3/4] row-span-3'>
              <img src={profile} alt='ayoriaXch' className='w-full h-auto'/>
            </div>
            <div className='col-[1/3]'>
              <CustomText
                text='Specialized in front end development,  fun and disciplined, with these characteristics I have managed to improve the quality of my technological solutions on my path that is just beginning.'
                text_type='paragraph' />
            </div >
            <div className='col-[1/3]'>
              <div className='flex flex-row gap-x-5'>
                <CustomButton
                  button_type='outline'
                  onClick={downloadCV}
                  text='Download CV'
                  icon='download' />
                <CustomButton
                  button_type='outline'
                  onClick={openWhatsAppWindow}
                  text='Write me'
                  icon='whatsapp' />
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='projects'>

      </div>
      <div className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='experience'>

      </div>
    </div>
  )
}

export default App
