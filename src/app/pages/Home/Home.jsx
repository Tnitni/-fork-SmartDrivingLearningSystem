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

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'New Driver',
            content: 'The simulator helped me build confidence before my actual driving test. Passed on the first try!',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Student',
            content: 'Best driving learning platform ever! The AI assistant answered all my questions instantly.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Instructor',
            content: 'I recommend this to all my students. The practice exams are incredibly realistic.',
            rating: 5
        }
    ];

    return (
        <div className='home-container'>
            {/* <TrafficLight text={state} /> */}

            <StarsBackground />
            <Hero />
            <Platform />
            <Journey />
            <Testimonials testimonials={testimonials} />
            <CTA />
        </div>
    )
}
