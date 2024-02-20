import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import jobReducer from './features/jobs/jobsSlice'

export const store = configureStore({
    reducer: {
        userState: userReducer,
        jobState: jobReducer,
    },
})
