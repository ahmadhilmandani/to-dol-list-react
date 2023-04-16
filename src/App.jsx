import { useState } from 'react'


import { List } from './List'

import bgMobileDark from './assets/img/bgMobileDark.jpg'
import iconMoon from './assets/img/icon-moon.svg'
import iconSun from './assets/img/icon-sun.svg'
import './App.css'

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [listName, setListName] = useState('')
  const [list, setList] = useState(
    [

    ]
  )
  const [counter, setCounter] = useState(0)

  const addList = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
    setList([...list, { work: listName, done: false }])
  }


  return (
    <div className='w-full min-h-screen flex justify-center gap-5 bg-Cust-Very-Dark-Blue relative px-6'>
      <div className='w-full h-52 bg-cover bg-no-repeat absolute' style={{ backgroundImage: `url(${bgMobileDark})` }}></div>
      <div className='lg:w-full max-w-[480px] w-[90%] mt-20 absolute'>
        <header className='flex justify-between items-center'>
          <h1 className='text-white font-semibold text-3xl tracking-widest'>TODO</h1>
          {lightMode == true ? <img src={iconSun} alt="" /> : <img src={iconMoon} alt='' />}
        </header>
        <main className='mt-5'>
          <form method="post" onSubmit={addList} id='form-list'>
            <input type="text" className='w-full px-3 py-3 rounded-md bg-Cust-Bg-Color text-white'
              onChange={
                (e) => {
                  setListName(e.target.value)
                }} />
          </form>
          <div className='mt-5 rounded-md bg-Cust-Bg-Color'>

            <List list={list}
              showDone={(paramIndex) => {
                const newArrList = list.map((list, index) => {
                  if (index == paramIndex && list.done != true) {
                    if (counter > 0) {
                      setCounter(counter - 1)
                    }
                    return { work: list.work, done: true }
                  }
                  else {
                    return list
                  }
                })
                setList(newArrList)
              }}

              removeList={(paramIndex) => {
                const newArrList = list.filter((list, index) => {
                  if (paramIndex != index) {
                    if (counter > 0) {
                      setCounter(counter - 1)
                    }
                    return list
                  }
                })
                setList(newArrList)
              }}
            />

            <div className='flex justify-between px-3 py-3 text-Cust-Dark-Grayish-Blue text-[10px]'>
              <div>{counter} items left</div>
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
