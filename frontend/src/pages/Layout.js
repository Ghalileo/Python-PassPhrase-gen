import React from 'react'
import MainAppLayout from '../components/layout/layout'
import POSTPhrase from '../components/PostPhrase/postPhrase'
import GETPhrases from '../components/GetPhrases/getPhrases'
import GETSignups from '../components/GetSignups/getSignups'
import Navigation from '../components/Nav'

const AppLayout = () => {
    // Original Return
    // return (
    //     <div>
    //         <Navigation/>
    //         {/* <h1 style={{textAlign: 'center'}}>Welcome to PassPhrase</h1> */}
    //         <h4 style={{textAlign:"center"}}>Add a phrase</h4>
    //         <POSTPhrase/>
    //         <br/>
    //         <br/>
    //         <h5 className="card text-white bg-dark mb-3" style={{textAlign: "center"}}>Your Phrases</h5>
    //         <GETPhrases/>
    //         <br/>
    //         <h1 style={{textAlign:"center"}}>Sign Up</h1>
    //         <h4 style={{textAlign:"center"}}>It will be fun</h4>
    //         <h5 className="card text-white bg-dark mb-3" style={{textAlign: 'center'}}>Signed-Up Users</h5>
    //         <GETSignups/>
    //     </div>
        

    // )
    // New Return
    return(
        <div>
            {/* <Navigation/> */}
            <MainAppLayout
            
            />
        </div>
    )
}

export default AppLayout;