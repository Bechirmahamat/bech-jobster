import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginProtected = ({ children }) => {
    const user = useSelector((store) => store.userState.user)

    if (user) {
        return <Navigate to='/dashboard' />
    } else {
        return children
    }
}
export default LoginProtected
