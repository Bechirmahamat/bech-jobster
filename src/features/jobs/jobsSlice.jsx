import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/customFetch'
import { logout } from '../user/userSlice'
import { toast } from 'react-toastify'

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['pending', 'interview', 'declined'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
}

export const AddNewJob = createAsyncThunk(
    'job/addNewJob',
    async (job, thunkApi) => {
        try {
            const response = await customFetch.post('/jobs', job, {
                headers: {
                    Authorization: `Bearer ${
                        thunkApi.getState().userState.user.token
                    }`,
                },
            })
            thunkApi.dispatch(clearCart())
            return response.data
        } catch (error) {
            if (error.response.status === 401) {
                thunkApi.dispatch(logout())

                return thunkApi.rejectWithValue('Unauthorized! Logging Out...')
            }
            return thunkApi.rejectWithValue(
                error.response.msg || 'Unauthorized!'
            )
        }
    }
)

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            return initialState
        },
        handleChangeOfValue: (state, action) => {
            const { name, value } = action.payload
            state[name] = value
        },
    },
    extraReducers: (builders) => {
        builders
            .addCase(AddNewJob.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(AddNewJob.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success('Job created successfully')
            })
            .addCase(AddNewJob.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
    },
})
export const { clearCart, handleChangeOfValue } = jobSlice.actions

export default jobSlice.reducer
