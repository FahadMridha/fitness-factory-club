import React from 'react';

const Question = () => {
    return (
        <div className='w-full'>
            <h2 className='text-center text-2xl border shadow-xl mt-10 p-6 w-full rounded-md  bg-slate-200'>Question Section</h2>
            <div  className = 'bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn1.How does react work?</h1>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.It designs simple views
                    for each state in your application, and React will efficiently update and render just the right component when your data changes.React implements a virtual DOM that is basically a DOM tree representation in JavaScript.So when it needs to read or write to the DOM, it will use the virtual representation of it.Then the virtual DOM will
                    try to find the most efficient way to update the browser’ s DOM.

                </p>
            </div>
            <div className = ' bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn2.what is the difference between props and state?</h1>
                <p>
                    Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.Props are immutable.State is muitable.Props allow you to pass data from one component to other components as an argument.State holds information about the components.Props are used to communicate between components.State can be sued
                    for rendering dynamic changes with the component.Props are external and controlled by whatever renders the component.The state is internal and controlled by the react component itself.
                </p>
            </div>
            <div className = ' bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn3.what does useeffect() without local API though?</h1>
                <p>
                   What is the purpose of useEffect ()?
                   The UseEffect Hook allows you to perform side effects in your components.useEffect hook allow fetching data, directly updating the DOM and timers.React will remember the
                   function you passed(we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </p>
            </div>
        </div>
    );
};

export default Question;