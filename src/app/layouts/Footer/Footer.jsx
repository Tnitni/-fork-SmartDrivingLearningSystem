import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-wrapper'>
                <div className='footer-brand'>
                    <div className='logo'>
                        <div className='logo-icon'>
                            <i className='fa-solid fa-car' />
                        </div>
                        <span className='logo-text'>GREENLIGHT</span>
                    </div>
                    <p>
                        Advanced driving training system powered by AI technology.
                        Experience the future of driver education.
                    </p>
                </div>

                <div className='footer-column'>
                    <h3>Quick Links</h3>
                    <Link to='/learn'>Theory Learning</Link>
                    <Link to='/practice'>Practice Exams</Link>
                    <Link to='/signs'>Traffic Signs</Link>
                    <Link to='/simulator'>Simulator</Link>
                </div>

                <div className='footer-column'>
                    <h3>Support</h3>
                    <Link to='/assistant'>AI Assistant</Link>
                    <Link to='/dashboard'>My Progress</Link>
                    <a href='#'>Help Center</a>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
            <div className='footer-bottom'>
                © 2026 <span>Smart Driving Learning System</span>. All rights reserved.
            </div>
        </footer>
    )
}
