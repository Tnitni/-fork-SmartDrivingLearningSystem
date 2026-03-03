import { Link } from 'react-router-dom';

import './CTA.css';

export default function CTA() {
    return (
        <div className='cta-container'>
            <section className='container'>
                <div className='background'>
                    <div className='glow glow-left' />
                    <div className='glow glow-right' />
                </div>

                <div className='wrapper'>
                    <div className='content'>
                        <div className='text'>
                            <h2 className='title'>
                                Ready to Master<br />the Road?
                            </h2>

                            <p className='subtitle'>
                                Join 10,000+ successful learners and start your journey today
                            </p>

                            <p className='note'>
                                Free access to all learning materials. No credit card required.
                            </p>
                        </div>

                        <div className='actions'>
                            <Link to='/learn'>
                                <button className='primary-btn'>
                                    {/* <Zap className='icon' /> */}
                                    <span>Start Learning Now</span>
                                </button>
                            </Link>

                            <Link to='/dashboard'>
                                <button className='secondary-btn'>
                                    {/* <TrendingUp className='icon' /> */}
                                    <span>View Progress Demo</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
