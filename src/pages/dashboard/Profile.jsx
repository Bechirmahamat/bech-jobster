import { FaUserCheck } from 'react-icons/fa'
import { FaUser, FaUserGroup } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { inputs } from '../../data'
import InputWihIcon from '../../components/InputWithIcon'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'
const Profile = () => {
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((store) => store.userState)
    const { lastName, name } = user
    const username = name.slice(0, 1) + lastName.slice(0, 1)
    const [values, setValues] = useState({
        name: user?.name || '',
        email: user?.email || '',
        location: user.location || '',
        lastName: user.lastName || '',
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, lastName, location, email } = values
        if (!name || !lastName || !location || !email) {
            toast.error('Please fill out all the inputs')
            return
        } else {
            dispatch(updateUser(values))
        }
    }
    return (
        <section className='grid md:grid-cols-12 gap-x-6 gap-y-8'>
            <div className='md:col-span-4 bg-white rounded-2xl pb-4'>
                <figure className='h-36 rounded-t-2xl bg-base-300 relative'>
                    <div className='absolute -bottom-8 ml-8'>
                        <div className='avatar z-[1] online placeholder'>
                            <div className='bg-neutral text-neutral-content rounded-full  w-20 outline outline-4 shadow-xl outline-white'>
                                <span className='text-lg uppercase'>
                                    {username}
                                </span>
                            </div>
                        </div>
                    </div>
                </figure>
                <div className='mt-10 ml-8'>
                    <h2 className='text-lg capitalize font-semibold'>
                        {name + ' ' + lastName}
                    </h2>
                    <p className=' text-sm flex mt-4 items-center gap-2 text-nowrap '>
                        <FaUserGroup />
                        <span className=' font-semibold'>1345</span>
                        <span className=''>Followers</span>
                    </p>
                    <p className='flex text-sm items-center gap-2 text-nowrap '>
                        <FaUserCheck />
                        <span className=' font-semibold'>1315</span>
                        <span className=''>Following</span>
                    </p>
                </div>
            </div>
            <div className='md:col-span-8 bg-white w-full rounded-2xl px-6 py-4 '>
                <h3 className='capitalize text-sm mb-4 font-semibold'>
                    Update your personal information
                </h3>
                <form action='' className='  gap-6 grid md:grid-cols-2'>
                    {inputs.map((input) => {
                        const name = input.name
                        return (
                            <InputWihIcon
                                key={input.id}
                                {...input}
                                value={values[name]}
                                handleChange={handleChange}
                            />
                        )
                    })}
                    <button
                        type='submit'
                        className='btn btn-secondary'
                        disabled={isLoading}
                        onClick={(e) => handleSubmit(e)}
                    >
                        {isLoading ? (
                            <>
                                <span className='loading loading-dots loading-sm'></span>
                                <span>submitting</span>
                            </>
                        ) : (
                            <span> Update</span>
                        )}
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Profile
