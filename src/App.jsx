import Card from "./components/card";
import './App.css'
import DarkMode from "./components/light";
import data from "./data/data.json";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const App = () => {

  const [search, setSearch] = useState([])
  
  return (
    <div className="h-screen w-full bg-white dark:bg-slate-500">
      <div className="h-[10%] w-full bg-slate-100 dark:bg-slate-500 flex justify-evenly  items-center">
        <DarkMode />
        <form className="relative flex">
          <input type="text" placeholder=" Search" className=" relative h-[35px] w-[300px] outline-1 shadow outline-blue-700 rounded-2xl px-8  text-[18px]" onChange={(e) => setSearch(e.target.value)} />
          <label htmlFor=""></label>
          <IoIosSearch className=" absolute top-2 left-3 text-gray-500 text-[17px]" />
        </form>
      </div>
      <div className="h-[90%] w-full overflow-hidden ">
        <div className="h-[100%] w-full grid grid-cols-5 gap-5 p-2 overflow-y-auto bg-slate-300 max-md:grid-cols-2 dark:bg-slate-600">
          {data.filter((data) => {
            if (search === '') {
              return data
            }
            else if (data.productName.toLowerCase().includes(search)){
              return data
            }
          })/* .filter((data) => {
            if (data.color.includes('black')) {
              return data
            }
          }) */
            .map((data) => <Card data={data} key={data.id} />)}
        </div>  
      </div>
    </div>
  )
}


export default App;



/* import './App.css'
import Page from './components/page'
import DarkMode from "./components/light";
import { useEffect, useState } from "react"

function App() {
    
  const [selectDark, setDark] = useState('light')
  
  const darkModeHandle = () => {
    setDark(selectDark == 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (selectDark == 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  },[selectDark])

  return (
    <div className="h-screen w-full bg-white dark:bg-slate-800">
      <div className="nav w-full h-[10%] bg-white dark:bg-slate-600 sticky top-0 max-lg:h-[7%] max-md:h-[5%] ">
        <DarkMode selectDark={selectDark} setDark={setDark} darkModeHandle={darkModeHandle} />
      </div>
        <Page></Page>
    </div>
  )
}

export default App */
