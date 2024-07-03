import { Count } from '../Count/count.component';
import { HorizontalLine } from '../ui/divider';
import { ArrowBigDown } from 'lucide-react';

export const Hero = () => {
    return (
        <div className='min-h-[calc(100vh-20px)] md:p-10 pt-40 mt-9 flex justify-between flex-col'>
            <div className="md:mt-20">
                <Count />
            </div>


            {/* a stylish arrow down */}
            <a href="#country_distribution" className='w-16 h-16 mx-auto dark:bg-slate-800 rounded-full flex align-middle justify-center hover:shadow-lg hover:shadow-white hover:animate-pulse'>
                <button>
                    <ArrowBigDown className='text-primary dark:text-white' />
                </button>
            </a>

            <HorizontalLine />
        </div>
    );
}