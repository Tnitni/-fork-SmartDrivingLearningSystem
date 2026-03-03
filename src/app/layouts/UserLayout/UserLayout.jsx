import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import UserHeader from '../Header/UserHeader';

import './UserLayout.css';

export default function UserLayout() {

    return (
        <div className='user-layout-container'>
            <UserHeader />
            <main className='main'><Outlet /></main>
            <Footer />
        </div>
    )
}