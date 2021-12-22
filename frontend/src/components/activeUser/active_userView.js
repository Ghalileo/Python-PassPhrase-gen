import { useState, useEffect } from "react"
import ActiveUser from './active_user'

const ActiveUserView = (props) => {

   return (
       <>
        <p className="activeUser">
            {props.activeUser.map(theuser => <div key={theuser.toString()}><ActiveUser activeUser={theuser}/></div>)}
        </p>
       </>
   )
}

export default ActiveUserView;