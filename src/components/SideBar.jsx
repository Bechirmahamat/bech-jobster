import { sidebar } from '../data'
import { LuArrowLeftToLine } from 'react-icons/lu'
import { LuArrowRightToLine } from 'react-icons/lu'

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {
    const [isHide, setIsHide] = useState(false)

    return (
        <div
            className={`flex flex-col justify-between h-full bg-white  transition-all duration-200 ${
                isHide ? 'w-[80px]' : 'w-[200px]'
            }`}
        >
            <ul className='flex w-full  flex-col'>
                {sidebar.map((item) => {
                    return (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='flex  items-center capitalize px-8 w-full py-4 h-16 hover:bg-base-200  gap-4'
                            end
                        >
                            <span>{item.icon}</span>
                            <span
                                className={` transition duration-1000 text-nowrap ${
                                    isHide ? 'hidden opacity-0' : 'block '
                                } `}
                            >
                                {item.text}
                            </span>
                        </NavLink>
                    )
                })}
            </ul>
            <li
                className='flex items-center px-8 h-16  py-4 hover:bg-base-200  gap-4  '
                onClick={() => setIsHide(!isHide)}
            >
                <div className='flex items-center  capitalize gap-4 text-lg'>
                    {!isHide ? (
                        <>
                            <LuArrowLeftToLine /> <span>collapse</span>
                        </>
                    ) : (
                        <LuArrowRightToLine />
                    )}
                </div>
            </li>
        </div>
    )
}
export default SideBar
