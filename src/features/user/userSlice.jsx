import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/customFetch'
import { toast } from 'react-toastify'

const defaultState = {
    isLoading: false,
    user: [],
}
export const registerUser = createAsyncThunk(
    'user/register',
    async (user, thunkApi) => {
        try {
            const response = await customFetch.post('/auth/register', user)
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                error?.response?.data?.msg || 'something went Wrong'
            )
        }
    }
)
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkApi) => {
        try {
            const response = await customFetch.post('/auth/login', user)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                error?.response?.data?.msg || 'something went Wrong'
            )
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.isLoading = false
                toast.success('Registered successfully')
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                console.log(state.user)
                toast.success('Welcome back:' + state.user.name)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
    },
})

export default userSlice.reducer