import { useState } from "react";

export default function Tab({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center flex-col">
                <div className="flex justify-center items-center w-screen ">
                    <div className="w-full flex justify-center bg-amber-200">
                        <div className="text-xl md:text-2xl font-bold flex gap-4 w-screen md:w-[50%] justify-center">
                            {tabs.length > 0 &&
                                tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`p-4 duration-200 hover:bg-amber-300 hover:underline`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="text-center w-full p-6 text-xl duration-200">
                    <p className="font-bold font-mono text-2xl md:text-3xl text-gray-100">
                        {tabs[activeTab]?.content}
                    </p>
                </div>
            </div>
        </>
    );
}
