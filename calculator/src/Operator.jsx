import React from 'react'
import Display from './Display'
class Key extends React.Component{
    //bind data on this
    constructor(){
        super();
        this.state={expression:''}
        this.onKeyPressed=this.onKeyPressed.bind(this);
    }
    onKeyPressed(){
        this.props.onKeyPressed(this.props.text);
    }
    render(){
        return(<button onClick={this.onKeyPressed}>{this.props.text}</button>)
    }
}
export  default class Calculator extends React.Component{
    constructor(){
        super();
        this.state={expression:''}
        this.onKeyPressed=this.onKeyPressed.bind(this);
        this.onDeletePressed=this.onDeletePressed.bind(this);
        this.onEvaluatePressed=this.onEvaluatePressed.bind(this);
    }
    onKeyPressed(text){
        this.setState((prev)=>({
            expression:prev.expression + text
        }));
    }
    onDeletePressed(){
        this.setState((prev)=>({
            expression:prev.expression.length <=1?'' : prev.expression.slice(0,-1)
        }));
    }
    onEvaluatePressed(){
        this.setState((prev)=>({
            expression:eval(prev.expression).toString()
        }));
    }
    render()
    {
        return(
            <div>
                <div><Display expression={this.state.expression}/></div>
                <Key text="0" onKeyPressed={this.onKeyPressed}/>
                <Key text="1" onKeyPressed={this.onKeyPressed}/>
                <Key text="2" onKeyPressed={this.onKeyPressed}/>
                <Key text="3" onKeyPressed={this.onKeyPressed}/>
                <Key text="4" onKeyPressed={this.onKeyPressed}/>
                <Key text="5" onKeyPressed={this.onKeyPressed}/>
                <Key text="6" onKeyPressed={this.onKeyPressed}/>
                <div>
                <Key text="7" onKeyPressed={this.onKeyPressed}/>
                <Key text="8" onKeyPressed={this.onKeyPressed}/>
                <Key text="9" onKeyPressed={this.onKeyPressed}/>
                <Key text="+" onKeyPressed={this.onKeyPressed}/>
                <Key text="-" onKeyPressed={this.onKeyPressed}/>
                <Key text="*" onKeyPressed={this.onKeyPressed}/>
                <Key text="/" onKeyPressed={this.onKeyPressed}/>
                </div>
                <button onClick={this.onDeletePressed}>C</button>
                <button onClick={this.onEvaluatePressed}>=</button>

            </div>
        )
    }
}