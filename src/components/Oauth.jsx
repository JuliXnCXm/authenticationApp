import React from 'react';
import twitter from '../assets/Twitter.svg'
import google from '../assets/Google.svg'
import github from '../assets/Github.svg'
import facebook from '../assets/Facebook.svg'
import '../styles/Oauth.css'


const Oauth = () => {
    return (
        <div className="content-conteiner__oauth">
            <span className="content-conteiner__oauth--title">or continue with these social profile</span>
            <div className="content-conteiner__oauth--imagesGroup" >
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={github} alt="" />
            </div>
        </div>
    )
};

export default Oauth;
