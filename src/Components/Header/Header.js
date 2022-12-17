import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Header(){
    // let navigate = useNavigate();
    // useEffect(() => {
    //     let authToken = sessionStorage.getItem('Auth Token')

    //     if (authToken) {
    //         navigate('/home')
    //     }

    //     if (!authToken) {
    //         navigate('/login')
    //     }
    // }, [])
//     return (
//         <div>
//             Home Page
//         </div>
//     )
//  }


import '../../App.css';
import HeroSection from './HeroSection';
import Navbar from './Navbar';

function Home(){
    return(
    <>
        <Navbar/>
        <HeroSection />
    </>
    );
}

export default Home;