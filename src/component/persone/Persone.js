import React, { useEffect, useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import img from '../../images/student-1.png'
import { addToDb, displayUi } from '../../utilities/fakedb';

const Persone = (props) => {
    const{time}=props
    const [breakTime, setBreakTime] = useState(0)
    useEffect(()=>{
        const data=displayUi()
        if(data){
            setBreakTime(data)
        }
        else{
            setBreakTime(0)
        }
    },[])
     const handlerBreakTime = (value) =>{
        setBreakTime(value)
        addToDb(value)
    }
    const timeArray = ['10s', '20s', '30s', '40s'];
    const message = () => toast('Congratulation,You completed your daily activities.', {
        position: "top-center",
        theme: 'dark'
    });
    return (
        <div>
            <div className = 'flex items-center ' >
                <img className='rounded-full h-14 mt-5 w-14 bg-gray-300' src={img} alt="" />
                <h4 className='text-2xl font-semibold text-yellow-200 ml-4'>Fahadh Mridha</h4>
            </div>
            <h2 className=' text-lg font-semibold text-slate-200'>Web Developer</h2>
            <div className = 'flex justify-between mt-8 border bg-slate-400 shadow-2xl mx-5 rounded-lg ' >
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
                <div className='flex  justify-between  p-5 shadow-lg rounded-md mx-8'>
                    <button onClick={()=>handlerBreakTime(timeArray[0])} className='rounded-full bg-slate-300  hover:bg-green-300 p-4'>10s</button>
                    <button onClick={()=>handlerBreakTime(timeArray[1])} className='rounded-full bg-slate-300  hover:bg-green-300 p-4'>20s</button>
                    <button onClick={()=>handlerBreakTime(timeArray[2])} className='rounded-full bg-slate-300 hover:bg-green-300 p-4'>30s</button>
                    <button onClick={()=>handlerBreakTime(timeArray[3])} className='rounded-full bg-slate-300 p-4  hover:bg-green-300'>40s</button>
                </div>
                <h3 className='text-xl font-semibold mt-4'>Exericise Details</h3>
                <div>
                    <h4 className='bg-slate-300 p-4 rounded-lg text-lg mx-5 mt-5'>Exericise time:{time}s</h4>
                    <h4 className='bg-slate-300 p-4 rounded-lg text-lg mx-5 my-5'>Exericise time:{breakTime}</h4>
                </div>
                <div className='bg-emerald-500 p-3 mx-5 rounded-lg hover:bg-emerald-300'>
                    <button onClick={message}>Activity Completed</button>
                    <ToastContainer/>
                </div>
        </div>
    );
};

export default Persone;