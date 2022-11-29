import React from "react"

const Profile = (props) => {
    console.log(props, "PROPS");
    const loggedIn = props.loggedIn
    const users = props.users
    console.log(users, "HELLO USERS")

    return(
        <div>
            {users.length ? (
                users.map((user) => {
                    console.log(users, "USER")
                    return (
                        <>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>{user.location}</div>
                        </>
                    )
                })
            ) : (
                <div>not loggedIn</div>
            )}
        </div>
    )
}

export default Profile