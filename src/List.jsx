import iconX from './assets/img/icon-cross.svg'
import iconCheck from './assets/img/icon-check.svg'

export function List(props) {
    return (
        <>
            {
                props.list.map((list, index) => {
                    return (
                        <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-white border-b border-b-Cust-Very-Dark-Grayish-Blue' id={index}>
                            <div className='flex gap-3 items-center'>
                                <div className={`w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] rounded-full overflow-hidden flex justify-center items-center ${list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border'}`} >
                                    {list.done &&
                                        <img src={iconCheck} alt="icon check" />
                                    }
                                </div>
                                <p className={list.done == true ? 'line-through text-Cust-Dark-Grayish-Blue' : ''} >{list.work}</p>
                            </div>
                            <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]' />
                        </div>
                    )
                })
            }
        </>
    )
}