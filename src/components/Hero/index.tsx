import profile from '../../assets/images/profile.jpg';
import CustomButton from '../CustomButton';
import CustomText from '../CustomText';
import { downloadCV, openWhatsAppWindow } from '../../utils/contact-functions'

export default function Hero() {
    return (
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
                            onClick={downloadCV}
                            text='Download CV'
                            icon='download'
                            size='small' />
                        <CustomButton
                            onClick={openWhatsAppWindow}
                            text='Write me'
                            icon='whatsapp'
                            size='small' />
                    </div>
                </div>
            </div>
        </div>
    )
}
