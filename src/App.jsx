import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgMobileDark from './assets/img/bgMobileDark.jpg'
import { List } from './List'
import iconMoon from './assets/img/icon-moon.svg'
import iconSun from './assets/img/icon-sun.svg'
import './App.css'

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [list, setList] = useState({

  })
  const test = [
    {
      work: 'Belajar backend',
      done: false
    },
    {
      work: 'minta ttd dospem',
      done: true,

    }
  ]

  return (
    <div className='w-full min-h-screen flex justify-center gap-5 bg-Cust-Very-Dark-Blue relative px-6'>
      <div className='w-full h-52 bg-cover bg-no-repeat absolute' style={{ backgroundImage: `url(${bgMobileDark})` }}></div>
      <div className='lg:w-full max-w-[480px] w-[90%] mt-20 absolute'>
        <header className='flex justify-between items-center'>
          <h1 className='text-white font-semibold text-3xl tracking-widest'>TODO</h1>

          {lightMode == true ? <img src={iconSun} alt="" />  : <img src={iconMoon} alt='' />}

        </header>
        <main className='mt-5'>
          <input type="text" className='w-full px-3 py-3 rounded-md bg-Cust-Bg-Color text-white' />
          <div className='mt-5 rounded-md bg-Cust-Bg-Color'>

            <List test={test} />

            <div className='flex justify-between px-3 py-3 text-Cust-Dark-Grayish-Blue text-[10px]'>
              <div>3 items left</div>
              <div>All</div>
              <div>Active</div>
              <div>Complete</div>
              <div>Clear Complete</div>
            </div>
          </div>
        </main>
        <div className='mt-10 text-center text-Cust-Dark-Grayish-Blue text-xs'>
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  )
}

export default App
