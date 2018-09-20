import React from 'react'
import { Zoom } from 'react-reveal'

import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

const VenueNfo = () => {
    const events =  [
        {
            title: 'Event Date & Time',
            description: '7 August 2018 @10.00 pm',
            backgroundClass: 'vn_icon_square bck_red',
            icon: icon_calendar,
        },
        {
            title: 'Event Location',
            description: '345 Speer Street Oakland, CA 9835',
            backgroundClass: 'vn_icon_square bck_yellow',
            icon: icon_location,
        }
    ]

    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    {events.map((item, index) => (
                        <Zoom duration={500} key={index} delay={index === events.length - 1 ? 500 : 0}>
                            <div className="vn_item">
                                <div className="vn_outer">
                                    <div className="vn_inner">
                                        <div className={item.backgroundClass}></div>
                                        <div
                                            className="vn_icon"
                                            style={{
                                                background:`url(${item.icon})`
                                            }}
                                        >
                                        </div>
                                        <div className="vn_title">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="vn_desc">
                                            <span>{item.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VenueNfo