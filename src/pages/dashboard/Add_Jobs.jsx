import { useDispatch, useSelector } from 'react-redux'
import { FormInput, FormSelect } from '../../components'
import {
    AddNewJob,
    clearCart,
    handleChangeOfValue,
} from '../../features/jobs/jobsSlice'

const Add_Jobs = () => {
    const dispatch = useDispatch()

    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobTypeOptions,
        jobType,
        statusOptions,
        status,
        isEditing,
        editJobId,
    } = useSelector((store) => store.jobState)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(handleChangeOfValue({ name, value }))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleAddJob = () => {
        dispatch(AddNewJob({ company, position, jobType, status, jobLocation }))
    }
    return (
        <section className='bg-white rounded-box p-8'>
            <h3 className='mb-2 capitalize text-lg font-semibold'>
                Add new Job
            </h3>

            <div className=''>
                <form className='grid gap-x-4  gap-y-2 sm:grid-cols-2 md:grid-cols-3'>
                    <FormInput
                        label={'position'}
                        name={'position'}
                        type={'text'}
                        values={position}
                        handleChange={handleChange}
                    />
                    <FormInput
                        label={'company'}
                        name={'company'}
                        type={'text'}
                        values={company}
                        handleChange={handleChange}
                    />
                    <FormInput
                        label={'job location'}
                        name={'jobLocation'}
                        type={'text'}
                        values={jobLocation}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label={'job Type'}
                        name={'jobType'}
                        values={jobTypeOptions}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label={'status options'}
                        name={'status'}
                        values={statusOptions}
                        handleChange={handleChange}
                    />
                    <div className='grid grid-cols-2 gap-2 mt-[2.2rem]'>
                        <button
                            type='button'
                            className='btn btn-accent'
                            onClick={() => handleClearCart()}
                        >
                            Clear inputs
                        </button>
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={() => handleAddJob()}
                        >
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Add_Jobs
