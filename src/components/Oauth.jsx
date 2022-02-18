import React from 'react';
import twitter from '../assets/Twitter.svg'
import google from '../assets/Google.svg'
import github from '../assets/Github.svg'
import facebook from '../assets/Facebook.svg'
import useAuth from '../hooks/useAuth'
import '../styles/Oauth.css'


const Oauth = () => {

    const { handleOauth } = useAuth()
    return (
        <div className="content-container__oauth">
            <span className="content-container__oauth--title">or continue with these social profile</span>
            <div className="content-container__oauth--imagesGroup" >
                <img src={google} alt="google" data-provider="google" onClick={handleOauth} />
                <img src={facebook} alt="facebook" data-provider="facebook" onClick={handleOauth}/>
                <img src={twitter} alt="twitter" data-provider="twitter" onClick={handleOauth}/>
                <img src={github} alt="github" data-provider="github" onClick={handleOauth}/>
            </div>
        </div>
    )
};

export default Oauth;
