import { useState } from "react"
import { connect } from "react-redux"
import { login } from "@/modules/auth/user"
import { Login } from "@/components/auth/Login"

const LoginPage = ({ onSubmit, onChange }) => {
    const [user,setUser]=useState({userid:'',password:''})
    const onChange = e => {
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
    const onSubmit = e => {
        e.preventDefault()
        alert(`로그인정보확인:>>> ${JSON.stringify(user)}`)
    }
    return (
        <Login onChange={onChange} onSubmit={onSubmit }/>
    )
}
export default connect(
    state => ({
        loginUser: state.loginUser
    }),
    {
        login
    }
)(LoginPage)