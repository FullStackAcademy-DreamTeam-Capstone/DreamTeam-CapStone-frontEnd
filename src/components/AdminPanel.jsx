import React from "react";
import Profile from "./Profile";

const AdminPanel = (props) => {
const currentUser = props.currentUser
const users = props.users

console.log(users.allUsers[0].name, "this is usrs from admin panel")
return(
    <div>
        <div>
        {currentUser.isadmin ? (
            <>
            <div>{users.allUsers.name}</div>
            </>
        ) : (
            <div>Hello</div>
        )}
        </div>
    </div>
)

}

export default AdminPanel;