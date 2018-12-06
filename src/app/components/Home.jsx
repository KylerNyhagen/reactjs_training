import React from 'react'

export class Home extends React.Component{
    render(){
        let content = "";
        if(true) {
            content = <p>Hello!</p>
        }
        return(
        <div>
            <p>In a new Component!</p>
            { content }
            { "Hello as a string not within a variable! It seems as those variables get put on their own lines...?\n"}
            { 2+2 }
            { 5 == 2 ? "Ternaries don't work" : "Ternaries work!"}
        </div>);
    }
}
