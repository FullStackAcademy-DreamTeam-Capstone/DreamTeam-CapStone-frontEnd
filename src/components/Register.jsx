import React, {useState} from "react"
import { register } from "../apiAdapter"

const Register = (props) => {
    const error = props.error
    const setError = props.setError
    const setLoggedIn = props.setLoggedIn

    const [registering, setRegistering] = useState(false)
    const [registerInfo, setRegisterinfo] = useState({
        username: "",
        password: "",
        name: "",
        location: "",
    })

    async function handleSubmit(event) {
        event.preventDefault()
        const username = registerInfo.username
        const password = registerInfo.password
        const name = registerInfo.name
        const location = registerInfo.location

        if (password.length <= 6) {
            setError ("Password must be more than 6 characters long.")
        } else {
            const response = await register(username, password, name, location)
            localStorage.removeItem("token")

            if  (response && response.token) {
                localStorage.setItem("token", response.token)
                setLoggedIn(response.token)
                setRegistering(false)
                setError(null)
            } else {
                setLoggedIn(false)
                setError("User already exists")
            }
        }
    }

    return (
        <>
        hello i am register
        <form onSubmit={handleSubmit}>

            <h4> Register </h4>
            <label htmlFor="username1"> Username: </label>
            <input
            id="username1"
            type="text"
            onChange={(e) => setRegisterinfo({...registerInfo, username: e.target.value})}
            value = {registerInfo.username}
            required
            />

            <br />

            <label htmlFor="password2"> Password: </label>
            <input
            id="password2"
            type="password"
            onChange={(e) => setRegisterinfo({...registerInfo, password: e.target.value})}
            value = {registerInfo.password}
            required
            />

            <br />

            <label htmlFor="name3"> Name: </label>
            <input
            id="name3"
            type="text"
            onChange={(e) => setRegisterinfo({...registerInfo, name: e.target.value})}
            value = {registerInfo.name}
            required
            />

            <br />

            <label htmlFor="location4"> Location: </label>
            <input
            id="location4"
            type="text"
            onChange={(e) => setRegisterinfo({...registerInfo, location: e.target.value})}
            value = {registerInfo.location}
            required
            />

        </form>
        </>
    )
    
}
export default Register