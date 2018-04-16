import React from 'react'
import Display from './Display'
import  Operator from './Operator'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div> <Operator/></div>
         </div>
    }
}