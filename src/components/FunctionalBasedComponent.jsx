import React from "react";
import PropExample from "../PropExample";

const Child = () => {
  return <p>Child Component</p>;
};

function FunctionalBasedComponent() {
  // create method to pass from parent to child
  const parentComponentHandler = () => {
    console.log("hello from your parent");
  };
//   pass handler to parent
  const getValueFromChildComponent = (value) => {
    console.log(value);
  }

  return (
    <div>
        
      <Child />
      functional based component
      {/* to pass data from this component to Prop */}
      <PropExample
        parentComponentHandler={parentComponentHandler}
        flag={false}
        data="data as prop"
      />
      <PropExample
        getValueFromChildComponent={getValueFromChildComponent}
      />
    </div>
  );
}

export default FunctionalBasedComponent;
