import { IoStatsChartSharp } from 'react-icons/io5'
import { MdOutlineDonutSmall, MdLibraryAdd } from 'react-icons/md'
import { FaClipboardUser } from 'react-icons/fa6'

export const sidebar = [
    {
        id: 1,
        text: 'home',
        path: '',
        icon: <IoStatsChartSharp />,
    },
    {
        id: 2,
        text: 'All jobs',
        path: 'all-jobs',
        icon: <MdOutlineDonutSmall />,
    },
    {
        id: 3,
        text: 'Add job',
        path: 'add-job',
        icon: <MdLibraryAdd />,
    },
    {
        id: 4,
        text: 'Profile',
        path: 'profile',
        icon: <FaClipboardUser />,
    },
]

export const inputs = [
    {
        id: 1,
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
            >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
        ),
        name: 'name',
        label: 'name',
        type: 'text',
    },
    {
        id: 2,
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 opacity-70'
            >
                <path d='M12 3C8.24 3 5 6.24 5 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.76-3.24-7-7-7zm-1.01 12.01L12 14l-.01 1.01z' />
            </svg>
        ),
        name: 'lastName',
        label: 'lastName',
        type: 'text',
    },
    {
        id: 3,
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
            >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
        ),
        name: 'email',
        label: 'email',
        type: 'email',
    },
    {
        id: 4,
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 opacity-70'
            >
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
            </svg>
        ),
        name: 'location',
        label: 'location',
        type: 'text',
    },

    {
        id: 5,
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
            >
                <path
                    fillRule='evenodd'
                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                    clipRule='evenodd'
                />
            </svg>
        ),
        name: 'password',
        label: 'password',
        type: 'password',
    },
]
