import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgMobileDark from './assets/img/bgMobileDark.jpg'
import iconX from './assets/img/icon-cross.svg'
import './App.css'

function App() {
  const [lightMode, setLightMode] = useState(false)
  return (
    <div className="w-full min-h-screen flex justify-center gap-5 bg-Cust-Very-Dark-Blue relative px-6">
      <div className='w-full h-52 bg-cover bg-no-repeat absolute z-[-2]' style={{ backgroundImage: `url(${bgMobileDark})` }}></div>
      <div className='w-full max-w-[480px] mt-20'>
        <header className='flex justify-between items-center'>
          <h1 className='text-white font-semibold text-3xl tracking-widest'>TODO</h1>
          {
            lightMode === true ?
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
          }
        </header>
        <main className='mt-5'>
          <input type="text" className='w-full px-3 py-3 rounded-md bg-Cust-Bg-Color' />
          <div className='mt-5 rounded-md bg-Cust-Bg-Color'>
            <div className='px-3 py-3 flex justify-between items-center text-xs text-white border-b border-b-Cust-Very-Dark-Grayish-Blue'>
              <div className='w-[20px] h-[20px] border rounded-full'></div>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <img className='w-[14px] h-[14px]' src={iconX}></img>
            </div>

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
