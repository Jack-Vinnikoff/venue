import React, { Component } from 'react'
import { Slide } from 'react-reveal'

class TimeUntill extends Component {

    state = {

    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        <span>Event Start in</span>
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                40
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }
}

export default TimeUntill