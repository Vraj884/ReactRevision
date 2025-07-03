import React, { lazy, Suspense } from 'react'
const All = () => {

    const LazyComponent = lazy(()=> import("./Map.jsx"))    

    return (
        <div className='w-[90%] lg:w-[50%] border-2 border-black flex flex-col gap-4 text-[black]'>
            
            <Suspense fallback={(<div className='flex justify-center bg-green-500'>Loading</div>)}>
                <LazyComponent  />
            </Suspense>
        </div>
    )
}

export default All
