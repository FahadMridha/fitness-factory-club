import React from 'react';
import img from '../../images/student-1.png'

const Persone = () => {
    
    return (
        <div>
            <div div className = 'flex items-center' >
                <img className='rounded-full h-20 w-20' src={img} alt="" />
                <h4 className='text-2xl text-white font-semibold'>Md.Badsha Fahadh</h4>
            </div>
        </div>
    );
};

export default Persone;