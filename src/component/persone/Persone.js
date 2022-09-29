import React from 'react';
import img from '../../images/student-1.png'

const Persone = (props) => {
    const{handlerBreakTime,breakTime,time}=props
    return (
        <div>
            <div className = 'flex items-center' >
                <img className='rounded-full h-20 w-20' src={img} alt="" />
                <h4 className='text-2xl text-white font-semibold'>Md.Badsha Fahadh</h4>
            </div>
            <h2 className=' text-lg font-semibold text-white'>Web Developer</h2>
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
                <div>
                    <h1 className='text-xl font-bold mt-3'>Break Time</h1>
                </div>
                <div className='flex  justify-between w-max p-5 shadow-lg rounded-md ml-8'>
                    <button onClick={()=>handlerBreakTime(breakTime[0])} className='rounded-full bg-slate-50 p-4'>10s</button>
                    <button className='rounded-full bg-slate-50 p-4'>20s</button>
                    <button className='rounded-full bg-slate-50 p-4'>30s</button>
                    <button className='rounded-full bg-slate-50 p-4'>40s</button>
                </div>
                <h3 className='text-xl font-semibold mt-4'>Exericise Details</h3>
                <div>
                    <h4 className='bg-slate-300 p-4 rounded-lg text-lg mx-5 mt-5'>Exericise time: 200s</h4>
                    <h4 className='bg-slate-300 p-4 rounded-lg text-lg mx-5 my-5'>Exericise time:{time}s</h4>
                </div>
                <div className='bg-emerald-500 p-3 mx-5 rounded-lg hover:bg-emerald-300'>
                    <button>Activity Completed</button>
                </div>
        </div>
    );
};

export default Persone;