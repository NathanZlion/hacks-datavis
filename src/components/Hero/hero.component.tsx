import a2svLogo from '../../assets/A2SV_LOGO.svg';
import { Count } from '../Count/count.component';
import downarrow from '../../assets/down-arrow.svg'
import './hero.css';

export const Hero = () => {
    return (
        <div className='hero-wrapper'>
            <div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-full p-10'>
                <div className='d-flex justify-center content-center w-full h-full p-2 md:p-3'>
                    <img src={a2svLogo} alt="A2SV Logo" className='object-contain'/>
                </div>
                <div className='grid grid-rows-2 content-center justify-center gap-3'>
                    <h1 className='text-5xl'>Africa to Silicon Valley</h1>
                    <h2 className='text-2xl'>2024 AI Hackathon</h2>
                </div>
            </div>
            <Count />

            <hr />

            {/* a stylish arrow down */}
            <a href="#" className='w-10 mx-auto'>
                <button>
                    <img src={downarrow} alt="down arrow" className='text-white' />
                </button>
            </a>
            
        </div>
    );
}