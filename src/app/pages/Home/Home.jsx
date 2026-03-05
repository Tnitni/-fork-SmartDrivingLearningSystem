import { useEffect, useState } from 'react';
// import TrafficLight from '../../components/TrafficLight/TrafficLight';
import StarsBackground from '../../components/StarsBackground/StarsBackground';
import Hero from './Hero';
import Journey from './Journey';
import Platform from './Platform';
import Testimonials from './Testimonials';
import CTA from './CTA';

export default function Home() {
    const [state, setState] = useState('error');

    useEffect(() => {
        const interval = setInterval(() => {
            setState(prev => {
                if (prev === 'error') return 'loading';
                if (prev === 'loading') return 'success';
                return 'error';
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home-container'>
            {/* <TrafficLight text={state} /> */}

            <StarsBackground />
            <Hero />
            <Platform />
            <Journey />
            <Testimonials />
            <CTA />
        </div>
    )
}
