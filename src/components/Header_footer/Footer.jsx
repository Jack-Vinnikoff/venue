import React from 'react'
import { Fade } from 'react-reveal'

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous"><span>The Venue</span></div>
                <div className="footer_copyright">
                    <span>The Venue 2018. All rights reserved</span>
                </div>
            </Fade>
        </footer>
    )
}

 export default Footer