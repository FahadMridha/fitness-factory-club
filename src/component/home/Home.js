import React from 'react';
import logo from '../../images/logo.png';
const Home = () => {
    return (
        <div>
            <div div className = 'grid grid-cols-4 gap-4' >
                <div className = 'col-span-3'>
                    <div className = 'flex items-center ml-12 mt-14' >
                        <img src={logo} alt="./" />
                        <h1 className='text-4xl text-orange-600 ml-4'>FITNESS FACTORY CLUB</h1>
                    </div>
                    <div> 
                        <h1>this is player</h1>
                    </div>
                </div>
                <div className='bg-gray-400'> 
                    <h1>customer Detailes</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;