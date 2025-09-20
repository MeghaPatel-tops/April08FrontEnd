import React, { useState } from 'react'

function User() {
    const [user,setUser] = useState({});
    const[userList,setuserList]=useState([]);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleClick = ()=>{
        if(!user.username || !user.email || !user.contact){
            return;
        }
        setuserList([...userList,user])
        console.log(user);
        
    }
  return (
    <div>
        <fieldset>
              <legend>User Registration</legend>
               <label htmlFor="">Enter Username</label>
            <input type="text" name="username" id=""  onChange={handleChange} />
            <br /><br />
              <label htmlFor="">Enter Username</label>
            <input type="text" name="email" id=""  onChange={handleChange} />
            <br /><br />
              <label htmlFor="">Enter Username</label>
            <input type="text" name="contact" id=""  onChange={handleChange}  />
            <br /><br />
            <button onClick={handleClick}>Add</button>
        </fieldset>
        <table border={1}>
            <thead>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>contact</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((u,index) =>(
                        <tr key={index}>
                            <td>{index+1}</td>
                             <td>{u.username}</td>
                              <td>{u.email}</td>
                               <td>{u.contact}</td>


                        </tr>
                    ))
                }
            </tbody>

        </table>
    </div>
  )
}

export default User