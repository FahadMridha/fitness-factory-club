import React from 'react';

const Exercise = (props) => {
    // console.log(props);
    const{name,img,body,time}=props.exercise
    return (
        <div>
            <div>
                <div div className = "card w-full bg-slate-200 shadow-xl m-4" >
                    <figure className="px-5 py-4">
                    <img src={img} alt="Shoes" className="rounded-xl w-full h-52" />
                    </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>{body}</p>
                    <p><small>Time required :{time}s</small></p>
                <div className="card-actions">
                    <button className=" bg-emerald-500 p-3 mx-5 rounded-lg hover:bg-emerald-300 px-8">Add To List</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Exercise;