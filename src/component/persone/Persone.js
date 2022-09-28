import React from 'react';
import img from '../../images/student-1.png'

const Persone = () => {
    
    return (
        <div>
            <div className = 'flex items-center' >
                <img className='rounded-full h-20 w-20' src={img} alt="" />
                <h4 className='text-2xl text-white font-semibold'>Md.Badsha Fahadh</h4>
            </div>
            < div className = 'flex justify-between mt-12 border shadow-2xl mx-5 rounded-lg ' >
                <div >
                    <h2  className='text-white '><span className='text-xl font-bold'>73</span> kg</h2>
                    <h3>Weight</h3>
                </div>
                <div>
                    <h2  className='text-white'><span className='text-xl font-bold'>6.7</span></h2>
                    <h3>Height</h3>
                </div>
                <div>
                    <h2 className='text-white'><span className='text-xl font-bold'>23</span>yrs</h2>
                    <h3>Age</h3>
                </div>
            <div/>
        </div>
        </div>
    );
};

export default Persone;