import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(0)
    return (
        <div className="flex w-[90%] md:w-[40%] p-2 justify-center items-center flex-col border-black border-2 rounded-sm gap-4 bg-yellow-200  ">
            <p className="flex w-full justify-center text-[3em]">
                {num}
            </p>
            <div className="w-full flex justify-center gap-2">
                <button
                className="w-1/3 flex py-2  bg-green-300 hover:bg-green-500 rounded-full border-black border-2 font-bold justify-center"
                onClick={()=>setNum(num-1)}>
                    1--
                </button>
                <button
                className="w-1/3 flex py-2  bg-green-300 hover:bg-green-500 rounded-full border-black border-2 font-bold justify-center"
                onClick={()=>setNum(0)}>
                    Reset
                </button>
                <button
                className="w-1/3 flex py-2  bg-green-300 hover:bg-green-500 rounded-full border-black border-2 font-bold justify-center"
                onClick={()=>setNum(num+1)}>
                    1++
                </button>
            </div>
        </div>
    )
}