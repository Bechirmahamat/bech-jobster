import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { CiLogout } from 'react-icons/ci'
import { logout } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import NavModal from './NavModal'
const DashboardNav = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.userState)
    const { lastName, name } = user
    const username = name.slice(0, 1) + lastName.slice(0, 1)
    return (
        <nav className='flex justify-between w-full gap-4'>
            {/* left side logo */}
            <div className='flex items-center gap-4'>
                <NavModal />
                <h2 className='text-3xl items-center gap-x-6 font-extrabold tracking-wider'>
                    Job<span className='text-sky-500'>ster</span>
                </h2>
            </div>

            {/* middle side  */}
            <div className='hidden lg:flex'>
                <div className='form-control'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='input input-bordered focus:outline-none focus:border-primary focus:border-2  w-24 md:w-auto lg:w-96'
                    />
                </div>
            </div>

            {/* right side user  info */}
            <div className=''>
                <div className='dropdown dropdown-end'>
                    <div tabIndex={0} role='button' className=''>
                        <div className='avatar online placeholder'>
                            <div className='bg-neutral text-neutral-content rounded-full w-12'>
                                <span className='text-lg uppercase'>
                                    {username}
                                </span>
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='dropdown-content z-[1] w-64  menu p-4 shadow bg-base-300 rounded-box '
                    >
                        <div className='flex flex-col items-center gap-2 mb-4 text-center'>
                            <div className='avatar   placeholder'>
                                <div className='bg-neutral text-neutral-content rounded-full w-10'>
                                    <span className='text-xl uppercase'>
                                        {username}
                                    </span>
                                </div>
                            </div>
                            <p className='text-sm w-full truncate capitalize'>
                                {name + ' ' + lastName}
                            </p>
                        </div>

                        <li>
                            <Link to={'/logout'}>
                                <FaRegUser />
                                <span>profile</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => dispatch(logout())}>
                                <CiLogout />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default DashboardNav
