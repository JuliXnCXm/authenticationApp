import React from 'react';
import twitter from '../assets/Twitter.svg'
import google from '../assets/Google.svg'
import github from '../assets/Github.svg'
import facebook from '../assets/Facebook.svg'
import useAuth from '../hooks/useAuth'
import '../styles/Oauth.css'


const Oauth = ({state}) => {
    const { handleOauth } = useAuth()

    return (
        <div className="content-container__oauth">
            <span className="content-container__oauth--title">or continue with these social profile</span>
            <div className="content-container__oauth--imagesGroup" >
                <img src={google} alt="google" data-provider="google" data-state={state} onClick={(e) => {handleOauth(e,state)}} />
                <img src={facebook} alt="facebook" data-provider="facebook" data-state={state} onClick={(e) => { handleOauth(e,state )}}/>
                <img src={twitter} alt="twitter" data-provider="twitter" data-state={state} onClick={(e) => { handleOauth(e,state )}}/>
                <img src={github} alt="github" data-provider="github" data-state={state} onClick={(e) => { handleOauth(e,state )}}/>
            </div>
        </div>
    )
};

export default Oauth;
