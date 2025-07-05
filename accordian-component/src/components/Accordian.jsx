import { useState } from "react"

export default function ({ accordianList }) {

    const [on, setOn] = useState(null)
    return (
        <div className="flex w-full md:w-1/3 bg-gray-400 rounded-2xl overflow-hidden">
            <div className="w-full ">
                {accordianList && accordianList.map((x, index) => {
                    const fun = (i) => {
                        if (on === index) {
                            setOn(null)
                        }
                        else {
                            setOn(i)
                        }
                    }
                    return (
                        <div key={index}>
                            <div className="flex w-full justify-between  px-2 hover:bg-gray-300 duration-500
                            text-xl md:text-2xl font-bold   ">
                                <span className="py-4">
                                    {x.title}
                                </span>
                                <button onClick={() => { fun(index) }}
                                    className="cursor-pointer py-4">
                                    {on === index ? "❌" : "⭕"}
                                </button>
                            </div>
                            {
                                on === index ? 
                                <div className="w-full bg-gray-200 duration-500">
                                    <p className="text-2xl md:text-3xl  px-4 py-2 font-light font-mono ">
                                        {x?.content}
                                    </p>
                                </div> : null
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}