import React,{useState, useEffect} from "react";
import axios from "axios";
import ActiveUserView from './active_userView'

const DisplayUser = () => {
// State object to collect the active user based on jwt token
    const [activeUser, setActiveUser] = useState([{}])
// Show if a user is logged into application.  Need new function on back-end strictly to display active user
    useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user_login')
    .then(res => {
        setActiveUser(res.data)
    }).catch((err) => {
        if (err.response)  {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
        } else if(err.request) {
        console.log(err.request);
        } else {
        console.log("err", err.message)
        }

    })
    },[])

  return (
      <>
        <ActiveUserView activeUser={activeUser}/>
      </>
  )
}

export default DisplayUser;