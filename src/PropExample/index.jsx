import React from "react";

const PropExample = (props) => {
    console.log(props);
    // to render prop from child
    const {flag, data, parentComponentHandler} = props;

    // to pass from child to parent
    // create a method
    const {getValueFromChildComponent} = props;
    // pass the methid to an handler 
    const handleClick = () => {
        const count = 5;
        getValueFromChildComponent(count + 1)
    }

    return (

        // how to pass this method from child to parent
        
        <div>
            {/* if flag is true I want to render data => instead, if false  */}
            {
                flag ? data : 'flag is false'
            }

            <button onClick={parentComponentHandler}>Click here</button>

            <button onClick={handleClick}>Child to Parent</button>
        </div>
    )
}

export default PropExample;