import React from 'react'
import axios from 'axios'

const ActiveUser = (props) => {

    return(
        <>
            <p>{props.login.email}</p>
        </>
    )
}

export default ActiveUser;