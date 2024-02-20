import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { setUserLocalStorage, getUserLocalStorage } from './localStorage'

const defaultState = {
    isLoading: false,
    isModalOpen: false,
    user: getUserLocalStorage(),
}
export const registerUser = createAsyncThunk(
    'user/register',
    async (user, thunkApi) => {
        try {
            const response = await customFetch.post('/auth/register', user)
            // console.log(response.data)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                error?.response?.data?.msg || 'something went Wrong'
            )
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkApi) => {
        try {
            const response = await customFetch.patch('/auth/updateUser', user, {
                headers: {
                    Authorization: `Bearer ${
                        thunkApi.getState().userState.user.token
                    }`,
                },
            })
            return response.data
        } catch (error) {
            if (error.response.status === 401) {
                toast.error('Seems Like you need to login again')
                return thunkApi.dispatch(logout())
            }
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
    reducers: {
        logout: (state, action) => {
            ;(state.user = null), setUserLocalStorage(null)
            if (action.payload) toast.error('Logout successfully')
        },
        openCloseModal: (state, action) => {
            state.isModalOpen = !state.isModalOpen
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                setUserLocalStorage(action.payload.user)
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
                setUserLocalStorage(action.payload.user)
                toast.success('Welcome back:' + state.user.name)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(updateUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                console.log(state.user)
                setUserLocalStorage(action.payload.user)
                toast.success('updated successfully')
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
    },
})
export const { logout, openCloseModal } = userSlice.actions
export default userSlice.reducer
