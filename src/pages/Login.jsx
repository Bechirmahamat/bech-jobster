import { Link, Navigate, redirect } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from '../assets/img.jpg'
import { FormInput } from '../components'
import { registerUser, loginUser } from '../features/user/userSlice'
const defaultState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Login = () => {
    const [values, setValues] = useState(defaultState)
    const dispatch = useDispatch()
    const { isLoading } = useSelector((store) => store.userState)
    // console.log(isLoading)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!password || !email || (!isMember && !name)) {
            console.log('opp you have to provide all the value')
            return
        } else {
            const { name, email, password, isMember } = values

            if (isMember) {
                dispatch(loginUser({ email, password }))
            } else {
                dispatch(registerUser({ name, email, password }))
            }
        }
        return <Navigate to='/dashboard' />
    }
    const handleMember = () => {
        setValues({ ...values, ['isMember']: !values.isMember })
    }

    return (
        <div className=' min-h-[100vh] py-16  gap-3 static-width max-w-4xl flex justify-center items-center flex-col '>
            <h2 className='text-3xl items-center  font-extrabold tracking-wider'>
                Job<span className='text-sky-500'>ster</span>
            </h2>
            <div className=' border rounded-lg grid sm:grid-cols-2 gap-x-4 gap-y-8 p-8'>
                <figure className='bg-red-50 rounded-lg hidden sm:block  overflow-hidden relative'>
                    <img
                        src={img}
                        alt='img'
                        className='w-full z-1 h-full object-cover'
                    />
                    <div className='absolute p-4  text-white rgba  w-full top-0 z-2 h-full flex justify-center items-center gap-3 flex-col '>
                        <p>
                            Your resume is perfect. It’s keyword-optimized,
                            industry-specified, full of achievements, backed by
                            data, and double-checked by an expert. If it’s none
                            of these things, stop right here and learn how..
                        </p>
                        <button className='btn btn-secondary align-bottom '>
                            Find more
                        </button>
                    </div>
                </figure>
                <div className='md:ml-4 lg:px-4'>
                    <form>
                        {!values.isMember && (
                            <FormInput
                                label={'name'}
                                type={'text'}
                                size={'input-sm'}
                                name={'name'}
                                value={values.name}
                                handleChange={handleChange}
                            />
                        )}
                        <FormInput
                            label={'email'}
                            type={'email'}
                            size={'input-sm'}
                            name={'email'}
                            value={values.email}
                            handleChange={handleChange}
                        />
                        <FormInput
                            label={'password'}
                            type={'password'}
                            size={'input-sm'}
                            name={'password'}
                            value={values.password}
                            handleChange={handleChange}
                        />

                        {values.isMember && (
                            <div className='text-xs mt-4 flex justify-between items-center  sm:text-sm  '>
                                <div className='flex items-center gap-1'>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                    />
                                    <span>Remember me</span>
                                </div>
                                <Link to={'/'} className='link '>
                                    Password Forget
                                </Link>
                            </div>
                        )}

                        <button
                            type='submit'
                            className='btn btn-primary w-full mt-4 text-md'
                            disabled={isLoading}
                            onClick={(e) => handleSubmit(e)}
                        >
                            {isLoading ? (
                                <span className='loading loading-dots'></span>
                            ) : (
                                <span>
                                    {!values.isMember ? 'Register' : 'Login'}
                                </span>
                            )}
                        </button>

                        <a
                            href='#'
                            className='btn btn-outline w-full mt-3 text-md '
                        >
                            <FcGoogle />
                            <span>
                                {!values.isMember ? 'register' : 'login'} with
                                google
                            </span>
                        </a>
                        <div className='mt-4 text-sm flex justify-end'>
                            <button
                                type='button'
                                className='link link-hover capitalize'
                                onClick={() => handleMember()}
                            >
                                {values.isMember
                                    ? ' not a member ? register'
                                    : 'Already a member? login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
