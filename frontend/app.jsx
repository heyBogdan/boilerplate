import menu from './modules/menu.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
    render(){
        return <h1>Hello world from 1 {this.props.author}</h1>
    }
}

ReactDOM.render(<Hello author="Bogdan"/>,document.getElementById('root'))

