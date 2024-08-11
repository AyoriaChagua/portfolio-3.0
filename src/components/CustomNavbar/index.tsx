import { useScroll } from '../../hooks/use-scroll'
import cat_white from '../../assets/white-cat.svg';
import cat_purple from '../../assets/purple-cat.svg';
import LikeButton from '../LikeButton';
import ThemeButton from '../ThemeButton';
import { useTheme } from '../../context/ThemeContext';

export default function CustomNavbar() {
  const { isInAboutSection, scrollToSection } = useScroll();
  const { theme } = useTheme();
  return (
    <div className={`dark:bg-[#2e2e3e89] bg-[#c2c2f3] bg-opacity-60 w-full fixed top-0 z-10 blur-background h-14`}>
      <div className='flex h-full items-center xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3  justify-between text-white'>
        <div>
          {!isInAboutSection &&
            <div className='flex items-center gap-3' onClick={() => scrollToSection('about')} style={{
              cursor: 'pointer'
            }}>
              {theme === "dark" ? <img src={cat_white} alt='cat-white' width={40} height={40} /> : <img src={cat_purple} alt='cat-purple' width={40} height={40} />}

              <div className='text-sm font-medium dark:text-white text-[#2D29DE]'>ayoria.x.ch</div>
            </div>
          }
        </div>
        <div className='flex flex-row gap-5'>
          <LikeButton />
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
