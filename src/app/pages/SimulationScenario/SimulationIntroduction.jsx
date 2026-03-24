import { Link } from 'react-router-dom';
import StarsBackground from '../../components/StarsBackground/StarsBackground';

import './SimulationIntroduction.css';

export default function SimulationIntroduction() {
    return (
        <div className='simulation-introduction-container'>
            <StarsBackground />
            <div className='container'>
                <div className='content'>
                    <h2>Heading</h2>
                    <p>Pragraph</p>
                </div>
                <Link to={`./scenarios`} className='link'>
                    ABC
                </Link>
            </div>
        </div>
    )
}
