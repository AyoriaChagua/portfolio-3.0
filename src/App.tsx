import { CustomButton, CustomNavbar, CustomText, ExperienceCard } from './components'
import { downloadCV, openWhatsAppWindow } from './utils/contact-functions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { background_dark } from './utils/colors';
import profile from './assets/images/profile.jpg';
import { MOCK_EXPERIENCE } from './utils/mock-data';

function App() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={`h-full flex flex-col `} style={{ background: background_dark }}>
      <CustomNavbar />
      <div className={`pt-24 xl:w-1/3 lg:w-3/6 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3 `}
        id='about'>
        <div className="" data-aos="fade-left">
          <div className="grid grid-cols-3 gap-4">
            <div className='col-span-2'>
              <h1 className="text-[#fff]  text-5xl font-bold ">I'm Ayoria<br /> <span className='animated-gradient-text'>Web Developer</span> </h1>
            </div>

            <div className='col-[3/4] xl:row-span-3 lg:row-span-3 md:row-span-3 sm:row-span-3   
            xl:w-full lg:w-full md:w-full sm:w-full 
            xl:h-auto lg:h-auto md:h-auto sm:h-auto 
            xl:rounded-md lg:rounded-md md:rounded-md sm:rounded-md 
            w-24 h-24  overflow-hidden rounded-full  flex  justify-end 
            '>
              <div className='xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full h-full'>
                <img src={profile} alt='ayoriaXch' className=' ' />
              </div>
            </div>
            <div className='xl:col-[1/3] lg:col-[1/3] md:col-[1/3] sm:col-[1/3] col-span-3'>
              <CustomText
                text='Specialized in front-end development. I tend to work in a creative, fun and responsible way.'
                text_type='paragraph' />
            </div >
            <div className='xl:col-[1/3] lg:col-[1/3] md:col-[1/3] sm:col-[1/3] col-span-3'>
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

      <hr className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`} />
      <div className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='projects'>
        <h3 className='text-white font-bold  text-lg '>My experience</h3>
      </div>
      <div className={`mt-16 xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3 flex flex-col gap-y-5`}
        id='experience'>
        {MOCK_EXPERIENCE.map(experience => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
          />
        ))}
      </div>
    </div>
  )
}

export default App
