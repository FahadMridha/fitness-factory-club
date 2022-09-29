import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { getStoredTime } from '../../utilities/fakedb';
import Exercise from '../exercies/Exercise';
import Persone from '../persone/Persone';
const Home = () => {
    const [exercises,setExercises]=useState([])
    const [activitiesTime,setActivitiesTime]=useState(0)
    // console.log(exercises);
    useEffect(()=>{
        fetch('exercise.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
    },[])


    // useEffect(()=>{
    //     const storedTime=getStoredTime()
    //     const saveTime=[];
    //     for (const id in storedTime) {
    //         const addedProduct=times.find(product=>product.id===id)
    //         // console.log(addedProduct);
    //         if(addedProduct){
    //             const quantity = storedTime[id]
    //             addedProduct.quantity = quantity
    //             // console.log(addedProduct);
    //             saveTime.push(addedProduct)
    //         }
    //     }
    //   setTimes()
    // },[])
    const handlerAddToActivitiesTime=(getTime)=>{
        const newTime=activitiesTime+getTime;
        setActivitiesTime(newTime)

    }
    return (
        <div>
            <div className = 'grid grid-cols-1 lg:grid-cols-4 gap-4' >
                <div className = 'col-span-3'>
                    <div className = 'flex items-center ml-12 mt-14' >
                        <img src={logo} alt="./" />
                        <h1 className='text-4xl text-orange-600 ml-4 font-bold'>FITNESS FACTORY CLUB</h1>
                    </div>
                    <h3 className='text-2xl font-semibold text-amber-500'>Select your today’s exercise</h3>
                    <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                        {
                            exercises?.map(exercise =><Exercise 
                                key={exercise.id}
                                 exercise={exercise}
                                 handlerAddToActivitiesTime={handlerAddToActivitiesTime}
                            />)

                        }
                    </div>
                </div>
                <div className = 'bg-slate-400 z-0 ml-8' >
                <Persone 
                time={activitiesTime}
                />
                </div>
            </div>
        </div>
    );
};

export default Home;