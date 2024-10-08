import { CustomNavbar, CustomText, ExperienceBox, ProjectBox, SkillBox } from './components'

import 'aos/dist/aos.css';
import Hero from './components/Hero';
import ContactMe from './components/ContactMe';
import { useApp } from './hooks/use-app';

function App() {

  useApp();



  return (
    <div className={`h-full flex flex-col dark:bg-[#101028] bg-white`}>
      <CustomNavbar />
      <div className={`pt-24 xl:w-2/5 lg:w-3/6 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3 `}
        id='about'>
        <Hero />
      </div>
      <hr className={`mt-16 xl:w-2/5 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`} />
      <div className={`mt-16 xl:w-2/5 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3 flex flex-col gap-y-5`}
        id='experience' data-aos="fade-right">
        <CustomText text='My experience' text_type='section' />
        <ExperienceBox />
      </div>
      <div className={`mt-16 xl:w-2/5 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='projects'>
        <CustomText text='My tech skills' text_type='section' />
        <div className="flex flex-col gap-y-10">
          <SkillBox />
        </div>
      </div>
      <div className={`mt-16 xl:w-2/5 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='projects'>
        <CustomText text='My projects' text_type='section' />
        <div className="flex flex-col gap-y-10">
          <ProjectBox />
        </div>
      </div>
      <div className={`mt-16 xl:w-2/5 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3`}
        id='projects'>
        <CustomText text='Contact me' text_type='section' />
        <div className="flex flex-col gap-y-10">
          <ContactMe />
        </div>
      </div>
    </div>
  )
}

export default App
