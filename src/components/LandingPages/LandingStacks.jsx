import { Slots } from 'components';
import { CSS, DBS, FRAMEWORKS, LANGUAGES } from 'consts';

const LandingStacks = () => {
  return (
    <div className='bg-gradient-to-b from-cyan-600 via-cyan-700 dark:from-cyan-800 dark:via-cyan-700 dark:to-purple-800 to-purple-600 flex flex-col items-center w-full h-fit pt-10 pb-64 lg:py-0 lg:h-screen '>
      <div className='flex flex-col w-11/12 lg:w-full gap-5 lg:gap-64 items-center'>
        <div className='text-xl lg:text-6xl text-text-white'>
          Compatible with your favorite stack.
        </div>
        <div className='flex items-center justify-center w-full lg:w-4/5'>
          <Slots itemList={[FRAMEWORKS, CSS, LANGUAGES, DBS]} />
        </div>
      </div>
    </div>
  );
};

export default LandingStacks;
