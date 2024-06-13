import { Count } from '../count/count.component';
import downarrow from '../../assets/downward-arrow.svg'
import './hero.css';

export const Hero = () => {
    return (
        <div className='hero-wrapper'>
            <div className="md:mt-20">
                <Count />
            </div>

            <hr />

            {/* a stylish arrow down */}
            <a href="#country_distribution" className='w-10 mx-auto '>
                <button>
                    <img src={downarrow} alt="down arrow"/>
                </button>
            </a>
            
        </div>
    );
}