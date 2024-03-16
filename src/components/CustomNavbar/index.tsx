import { useScroll } from '../../hooks/use-scroll'
import { FaMoon } from "react-icons/fa";
import cat_white from '../../assets/white-cat.svg';

export default function CustomNavbar() {
  const { isInAboutSection, scrollToSection } = useScroll();

  return (
    <div className={`bg-[#2e2e3e] bg-opacity-50 w-full fixed top-0 z-10 blur-background h-12`}>
      <div className='flex h-full items-center xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3  justify-between text-white'>
        <div>
          {!isInAboutSection &&
            <div className='flex items-center gap-3' onClick={() => scrollToSection('about')} style={{
              cursor: 'pointer'
            }}>
              <img src={cat_white} alt='cat-white' width={35} height={35} />
              <div className='text-sm font-medium'>ayoria.x.ch</div>
            </div>
          }
        </div>
        <div>
          <FaMoon size={23} color='#413DF9' />
        </div>
      </div>
    </div>
  )
}
