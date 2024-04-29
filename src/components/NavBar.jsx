import { useGeneric } from 'hooks';
import { Button } from 'components';

const NavBar = () => {
  const { lightMode, setLightMode } = useGeneric();
  const handleThemeClick = () => {
    setLightMode((prev) => !prev);
    localStorage.setItem('light-mode', JSON.stringify(!lightMode));
  };

  return (
    <div className='absolute top-0 w-full'>
      <div className='flex flex-row z-10 sticky top-0 items-center p-5 justify-between w-full h-20 bg-matte-black'>
        <div className='flex items-center gap-5'>
          <div className='rounded-full p-4 hover:p-3 transition-all border-white border-2'></div>
          <div className='text-text-white text-md lg:max-2xl:text-lg font-semibold'>
            Liad Manteka
          </div>
        </div>
        <Button
          onClick={() => handleThemeClick()}
          buttonStyle={'white'}
          className='material-symbols-outlined'
        >
          {lightMode ? 'dark_mode' : 'light_mode'}
        </Button>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
