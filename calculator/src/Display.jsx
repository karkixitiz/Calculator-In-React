import ReactDOM from 'react-dom'
import React from 'react'
//create functional component. This is stateless component
export default function Display(props)
{
    return(<input type="text" value={props.expression} disabled={true}/>);
}