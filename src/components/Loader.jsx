import React from 'react'
import {RotatingLines} from 'react-loader-spinner';

export default function loader() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="grey"
                strokeWidth="5"
                animationDuration="1"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
