import { useEffect, useState } from "react"


function App() {
  const [darkTheme, setDarkTheme] = useState(JSON.parse(window.localStorage.getItem("Theme")) | false)
  useEffect(() => {
    window.localStorage.setItem("Theme", `${darkTheme}`)
  }, [darkTheme])
  const bigDiv = darkTheme ? "bg-[black]" : "bg-gray-600"
  const textClass = darkTheme ? "text-white" : "text-black"
  const centerDiv = darkTheme ? "bg-[blue]" : "bg-[yellow]"
  const buttonClass = darkTheme ? "bg-[yellow]" : "bg-[blue]"
  return (
    <div className={`w-screen h-screen flex justify-center items-center ${bigDiv} font-bold`}>
      <div className={`max-w-[50%] px-6 py-8 flex flex-col gap-6 border-2 rounded-lg ${centerDiv} ${textClass} `}>
        <h2 className="text-center text-3xl underline">
          Your are currently having {darkTheme ? "Dark-mode" : "Light-mode"}
        </h2>
        <div className="w-full flex justify-center items-center gap-4">
          <span className={`text-2xl `}>Change theme =&gt;</span>
          <button className={`text-2xl font-semibold border-2 p-4 rounded-4xl ${buttonClass} text-black `}
            onClick={()=>setDarkTheme(!darkTheme)}>
            Change
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
