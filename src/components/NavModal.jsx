import { FaTimes } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { sidebar } from '../data'

import { useDispatch, useSelector } from 'react-redux'
import { openCloseModal } from '../features/user/userSlice'
import { NavLink } from 'react-router-dom'

const NavModal = () => {
    const dispatch = useDispatch()
    const { isModalOpen } = useSelector((store) => store.userState)

    const handleModal = () => {
        dispatch(openCloseModal())
    }
    return (
        <div className='lg:hidden '>
            <button
                className='btn btn-outline  text-xl'
                onClick={() => handleModal()}
            >
                <FaBarsStaggered />
            </button>
            <div className={isModalOpen ? 'Modal' : 'hidden opacity-0'}>
                <button
                    className='btn text-xl btn-error'
                    onClick={() => handleModal()}
                >
                    <FaTimes />
                </button>
                <div className={'bg-white my-6'}>
                    <ul className='flex w-full  flex-col'>
                        {sidebar.map((item) => {
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => handleModal()}
                                    className='flex items-center px-8 flex-nowrap w-full overflow-hidden   py-4 h-16 hover:bg-base-200  gap-4 text-lg'
                                    end
                                >
                                    {item.icon}
                                    <span className=' transition duration-1000 text-nowrap '>
                                        {item.text}
                                    </span>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavModal
