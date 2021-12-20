import React from 'react'
import { AccountBox } from '../components/accountBox';

const Home = () => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to PassPhrase</h1>
            <div style={{textAlign:'center'}}>
                <AccountBox/>
            </div>
        </div>
        

    )
}

export default Home;