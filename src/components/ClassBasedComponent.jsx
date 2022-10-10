import React, { Component } from "react";  

// TO CREATE A CLASS BASED COMPONENT:
// class keyword + name component + exteds component of react
class ClassBasedComponent extends Component{

    // render method -> the jsx that we want to export as component
    render(){
        return (
            <div>Class based component example</div>
        )
    }
};


// export component to use into the App
export default ClassBasedComponent;