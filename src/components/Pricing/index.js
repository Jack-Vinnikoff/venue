import React, { Component } from 'react'
import { Zoom } from 'react-reveal'

import MyButton from '../Utills/MyButton'

class Pricing extends Component {

    state = {
        boxPrices: [
            {
                price: 100,
                position: 'Balcony',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
                linkTo: 'http://sales/b',
                delay: 500,
            },
            {
                price: 200,
                position: 'Medium',
                desc: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
                linkTo: 'http://sales/m',
                delay: 0,
            },
            {
                price: 350,
                position: 'Star',
                desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                linkTo: 'http://sales/s',
                delay: 800,
            }
        ],
    }

    showBoxes = () => (
        this.state.boxPrices.map((item, index) => (
            <Zoom delay={item.delay} key={index}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${item.price}</span>
                            <span>{item.position}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{item.desc}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={item.linkTo}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing