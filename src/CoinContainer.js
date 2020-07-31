import React, { Component } from 'react'
import { choice } from './helpers';
import './CoinContainer.css'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    };
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flip() {
        const newCoin = choice(this.props.coins)
        this.setState( st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            }
            if(newCoin.side === 'heads') {
                newState.nHeads = st.nHeads + 1
            }else {
                newState.nTails = st.nTails + 1
            }
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }
    handleClick() {
        this.flip()
    }
    render () {
        return (
            <div className="CoinContainer">
                <h1>Let's Flip A Coin</h1>
                { this.state.currCoin && 
                    <div>
                        <img src={this.state.currCoin.imgSrc} alt={this.state.currCoin.side} />
                    </div>
                }
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips}flips, There have been {this.state.nHeads} heads, {this.state.nTails} tails</p>
            </div>
        )
    }
}

export default CoinContainer;