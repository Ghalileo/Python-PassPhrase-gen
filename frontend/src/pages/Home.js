import React from 'react'
import { AccountBox } from '../components/accountBox';

const Home = () => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to PassPhrase</h1>
            <br/>
            <div style={{paddingLeft:'500px'}}>
                <AccountBox/>
            </div>
        </div>
        

    )
}

export default Home;