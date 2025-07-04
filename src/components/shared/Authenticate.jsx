import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { ContextAuth } from '../../memory/Auth'

export default function Authenticate() {

    const [auth] = useContext(ContextAuth)
    if (!auth.authenticate) {
        return <Navigate to="/access" />
    }
    
    return <Outlet></Outlet>
}
