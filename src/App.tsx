import { CustomButton, CustomNavbar, CustomText } from './components'
import { downloadCV, openWhatsAppWindow } from './utils/contact-functions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { background_dark } from './utils/colors';

function App() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={`h-full flex flex-col `} style={{ background: background_dark }}>
      <CustomNavbar />
      <div className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='about'>
        <div className="flex w-full flex-col gap-y-10" data-aos="fade-left">
          <h1 className="text-[#fff]  text-6xl font-bold">Hi! <br /> I’m <span className='animated-gradient-text'>FullStack</span> <br /> Developer</h1>
          <div >
            <CustomText
              text='Specialized in front end development,  fun and disciplined, with these characteristics I have managed to improve the quality of my technological solutions on my path that is just beginning.'
              text_type='paragraph' />
          </div>
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
