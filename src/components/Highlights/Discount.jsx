import React, { Component } from 'react'
import { Fade, Slide } from 'react-reveal'

import MyButton from '../Utills/MyButton'

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30,
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart +1,
            })
        }
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th December</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Discount