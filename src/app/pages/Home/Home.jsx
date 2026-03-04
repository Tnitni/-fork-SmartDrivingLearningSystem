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

    const features = [
        {
            icon: 'BookOpen',
            title: 'Theory Learning',
            description: 'Comprehensive lessons on traffic laws, signs, and driving techniques',
            color: 'from-blue-600 to-cyan-600'
        },
        {
            icon: 'FileText',
            title: 'Practice Exams',
            description: 'Realistic mock tests with instant feedback and detailed analytics',
            color: 'from-green-600 to-emerald-600'
        },
        {
            icon: 'Triangle',
            title: 'Traffic Signs Library',
            description: 'Complete database of traffic signs with interactive learning',
            color: 'from-orange-600 to-amber-600'
        },
        {
            icon: 'Gamepad2',
            title: 'Driving Simulator',
            description: 'Immersive 3D simulation for practical driving scenarios',
            color: 'from-purple-600 to-pink-600'
        },
        {
            icon: 'MessageCircle',
            title: 'AI Assistant',
            description: 'Get instant help and personalized learning recommendations',
            color: 'from-cyan-600 to-blue-600'
        },
        {
            icon: 'TrendingUp',
            title: 'Progress Tracking',
            description: 'Detailed analytics and insights into your learning journey',
            color: 'from-pink-600 to-rose-600'
        }
    ];

    const steps = [
        {
            step: '01',
            title: 'Learn the Theory',
            description: 'Master traffic laws, road signs, and driving principles through interactive lessons designed by experts.',
            icon: 'BookOpen',
            color: 'linear-gradient(to bottom right, #2563eb, #06b6d4)'
        },
        {
            step: '02',
            title: 'Practice & Test',
            description: 'Sharpen your knowledge with realistic exams and receive AI-powered feedback on weak areas.',
            icon: 'FileText',
            color: 'linear-gradient(to bottom right, #06b6d4, #2563eb)'
        },
        {
            step: '03',
            title: 'Simulate & Master',
            description: 'Experience real-world driving scenarios in our advanced 3D simulator before hitting the road.',
            icon: 'Gamepad2',
            color: 'linear-gradient(to bottom right, #2563eb, #06b6d4)'
        }
    ];

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
            <Platform features={features} />
            <Journey steps={steps} />
            <Testimonials testimonials={testimonials} />
            <CTA />
        </div>
    )
}
