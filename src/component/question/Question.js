import React from 'react';

const Question = () => {
    return (
        <div>
            <div div className = 'w-9/12 bg-slate-300 p-4 rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn1.How does react work?</h1>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                </p>
            </div>
            <div div className = 'w-9/12 bg-slate-300 p-4 rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn2.what is the difference between props and state?</h1>
                <p>
                    Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.
                </p>
            </div>
            <div div className = 'w-9/12 bg-slate-300 p-4 rounded-lg text-lg mx-5 mt-5' >
                <h1 className='test-2xl font-bold text-left'>Qsn3.what does useeffect() without local API though?</h1>
                <p>
                   What is the purpose of useEffect ()?
                    What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </p>
            </div>
        </div>
    );
};

export default Question;