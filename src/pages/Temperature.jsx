import React from 'react'

class Temperature extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentTemp: 0
        }
    }

    render(){     
        return (
            <div className='temperature'>
                <h1>Temperature</h1>
                <input 
                    type="number" 
                    placeholder="Temperature in C°"
                    onSelect={e => e.target.placeholder = ''}
                    onBlur={e => e.target.placeholder = "Temperature in C°"}
                    onChange={e => this.setState({currentTemp: e.target.value})}
                    value={this.state.currentTemp}
                    />
    
                {
                    this.state.currentTemp < 10 ? (
                        <div style={{color: "blue"}}>
                           It's cold ❄️ 
                        </div>
                    ) : this.state.currentTemp > 30 ? (
                        <div style={{color: "red"}}>
                            It's warm ☀️ 
                        </div>
                    ) : (
                        <div style={{color: "black"}}>
                            It's nice 🌼 
                        </div>
                    )
                    
                }
            </div>
        )
    }
}

export default Temperature
