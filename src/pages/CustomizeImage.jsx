import React, { Component } from 'react'
import '../styles/range.css'

class CustomizeImage extends Component {
    constructor(props){
        super(props)

        this.state={
            rangeValue : 100,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
        }
    }

    render() {
        return (
            <div className='customizeImg'>
                <input 
                    type="text" 
                    placeholder="Image URL"
                    onChange={e => this.setState({imgUrl: e.target.value})}
                    value={this.state.imgUrl}
                    />

                <input 
                    type="range" 
                    min="0" 
                    max="200"
                    onChange={e => this.setState({rangeValue : e.target.value})}
                    value={this.state.rangeValue}
                />

                <span>{this.state.rangeValue} x {this.state.rangeValue} px</span>
                
                
                <div style={{
                    width: 300,
                    height: 300,
                    border: 'solid 3px black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: `${this.state.rangeValue}px`,
                        height: `${this.state.rangeValue}px`
                    }}>
                        {this.state.imgUrl && 
                            <img 
                                style={{width: '100%'}}
                                src={this.state.imgUrl} alt="My image" />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomizeImage 
