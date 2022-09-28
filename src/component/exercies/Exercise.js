import React from 'react';

const Exercise = (props) => {
    // console.log(props);
    const{id,name,img,body}=props.name
    console.log(id);
    return (
        <div>
            <div>
                <div className="card w-full bg-base-100 shadow-xl m-4">
                    <figure className="px-5 py-4">
                    <img src={img} alt="Shoes" className="rounded-xl w-full h-52" />
                    </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>{body}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add To List</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Exercise;