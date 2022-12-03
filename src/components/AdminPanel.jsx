import React from "react";
import Profile from "./Profile";

const AdminPanel = (props) => {
const currentUser = props.currentUser
const users = props.users

// console.log(users.allUsers[0], "this is usrs from admin panel")
return(
    <div>
        <div>
        {currentUser.isadmin ? (
            <>
            <div></div>
            </>
        ) : (
            <div>Hello</div>
        )}
        </div>
    </div>
)

}

export default AdminPanel;