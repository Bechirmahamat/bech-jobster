import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const user = useSelector((store) => store.userState.user)

    if (!user) {
        return <Navigate to='/' />
    } else {
        return children
    }
}

export default Protected
