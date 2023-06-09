import { useState, useEffect } from 'react'


import { List } from './List'

import bgMobileDark from './assets/img/bgMobileDark.jpg'
import bgDesktopDark from './assets/img/bg-desktop-dark.jpg'
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
  const [drag, setDrag] = useState(null)
  const [counter, setCounter] = useState(0)
  const [category, setCategory] = useState('all')
  const [theme, setTheme] = useState(null);

  const addList = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
    setList([...list, { work: listName, done: false }])
  }

  const onDragReorder = (event, paramIndexKey) => {
    event.preventDefault()
    setDrag(paramIndexKey)
  }
  const onDropReorder = (event, paramIndexKey) => {
    event.preventDefault()
    const sourceIndex = drag;

    if (isNaN(sourceIndex) || isNaN(paramIndexKey)) {
      return;
    }

    const tempItems = [...list];
    const [removed] = tempItems.splice(sourceIndex, 1);
    tempItems.splice(paramIndexKey, 0, removed);
    setList(tempItems);
  }


  const handleDragOver = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='w-full min-h-screen flex justify-center gap-5  relative px-6'>
      <div className='lg:hidden block w-full h-52 bg-cover bg-no-repeat absolute z-[-2]' style={{ backgroundImage: `url(${bgMobileDark})` }}></div>
      <div className='lg:block hidden w-full h-60 bg-cover bg-no-repeat absolute z-[-2]' style={{ backgroundImage: `url(${bgDesktopDark})` }}></div>
      <div className='lg:w-full max-w-[480px] w-[90%] mt-20 lg:mt-24 mb-10 lg:mb-16'>
        <header className='flex justify-between items-center'>
          <h1 className='text-white font-semibold text-3xl tracking-widest'>TODO</h1>
          {lightMode == true ? <img className='cursor-pointer' src={iconSun} alt="" onClick={handleThemeSwitch} /> : <img className='cursor-pointer' src={iconMoon} alt='' onClick={handleThemeSwitch} />}
        </header>
        <main className='mt-5' >
          <form method="post" onSubmit={addList} id='form-list'>
            <input type="text" className='w-full px-3 py-3 rounded-md bg-Cust-Bg-Color text-white'
              onChange={
                (e) => {
                  setListName(e.target.value)
                }} />
          </form>

          <div className='mt-5 rounded-md bg-white dark:bg-Cust-Bg-Color' >
            {list.map((mappedList, index) => {
              return (
                <List

                  key={index}
                  index={index}
                  list={mappedList}
                  category={category}
                  setDone={(paramIndex) => {
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
                  onDragReorder={(e) => {
                    onDragReorder(e, index)
                  }}
                  onDropReorder={
                    (e) => {
                      onDropReorder(e, index)
                    }}
                  on
                  onHandleDragOver={
                    handleDragOver
                  }
                />
              )
            })}


            <div className='flex justify-between px-3 py-3 text-Cust-Dark-Grayish-Blue text-[10px]'>
              <div>{counter} items left</div>
              <a
                className='cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('all')
                }}>All</a>
              <a
                className='cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('active')
                }}>Active</a>
              <a
                className='cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('complete')
                }}>Complete</a>
              <a
                className='cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('all')
                  setList([])
                  setListName('')
                  setCounter(0)
                }}>Clear Complete</a>
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