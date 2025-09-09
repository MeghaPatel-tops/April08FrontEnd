import React from 'react'

function Userprofile(props) {
  return (
    <div>
        <fieldset>
            <legend>User Profile</legend>
            <h1>Username:{props.user.uname}</h1>
            <h2>Email:{props.user.email}</h2>
            <h3>Contact:{props.user.contact}</h3>
        </fieldset>
    </div>
  )
}

export default Userprofile