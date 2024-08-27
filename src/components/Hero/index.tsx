import profile from '../../assets/images/profile.jpg';
import CustomButton from '../CustomButton';
import { downloadCV, openWhatsAppWindow } from '../../utils/contact-functions'

export default function Hero() {
    return (
        <div className="" data-aos="fade-left">
            <div className="grid grid-cols-3 gap-4">
                <div className='col-span-2'>
                    <h1 className=" dark:text-[#fff] text-indigo-600 text-5xl font-bold ">Hi, I'm Ayoria<br /> <span className='animated-gradient-text'>Creative developer</span> </h1>
                </div>

                <div className='col-[3/4] xl:row-span-3 lg:row-span-3 md:row-span-3 sm:row-span-3  xl:w-full lg:w-full md:w-full sm:w-full  xl:h-auto lg:h-auto md:h-auto sm:h-auto xl:rounded-lg lg:rounded-lg md:rounded-lg sm:rounded-lg w-24 h-24  overflow-hidden rounded-full  flex  justify-end'>
                    <div className='w-full h-full'>
                        <img src={profile} alt='ayoriaXch' />
                    </div>
                </div>
                <div className='xl:col-[1/3] lg:col-[1/3] md:col-[1/3] sm:col-[1/3] col-span-3'>
                    <div className='dark:text-[#BCB6E1] text-indigo-600  xl:text-xl lg:text-xl md:text-xl sm:text-lg  text-base font-light'>I'm a developer who combines <span className='font-bold text-[#BFB7F0]'> intuitive design and robust functionality</span> in full-stack applications.
                    </div>
                </div >
                <div className='xl:col-[1/3] lg:col-[1/3] md:col-[1/3] sm:col-[1/3] col-span-3'>
                    <div className='flex flex-row gap-x-5'>
                        <CustomButton
                            onClick={downloadCV}
                            text='Curriculum'
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
