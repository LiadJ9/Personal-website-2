import { CSS, DBS, FRAMEWORKS, LANGUAGES } from '../../consts';
import { Slots } from '..';

const LandingStacks = () => {
  return (
    <div className='bg-gradient-to-b from-cyan-600 via-cyan-700 dark:from-cyan-800 dark:via-cyan-700 dark:to-purple-800 to-purple-600 flex flex-col items-center w-full h-screen'>
      <div className='flex flex-col w-full gap-64 items-center'>
        <div className='text-6xl text-text-white'>
          Compatible with your favorite stack.
        </div>
        <div className='flex items-center justify-center w-4/5 '>
          <Slots itemList={[FRAMEWORKS, CSS, LANGUAGES, DBS]} />
        </div>
      </div>
    </div>
  );
};

export default LandingStacks;
