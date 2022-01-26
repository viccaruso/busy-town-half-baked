import React from 'react';

export default function TrafficLight({ color }) {
  return (
    // this component takes in a prop called color. It is either 'red', 'yellow' or 'green'.
    <div className='traffic-light'>
      {/* in each of these divs, set it up so that if the color matches, add the css class 'on' to the classNames */}
      {/* for example, the css classes for the div below should be `red circle on`, if props.color is 'red' */}
      <div className={color === 'red' ? 'red circle on' : 'red circle' }></div>
      {/* the css classes for the div below should be `yellow circle on`, if props.color is 'yellow' */}
      <div className={color === 'yellow' ? `yellow circle on` : 'yellow circle'}></div>
      {/*  the css classes for the div below should be `green circle on`, if props.color is 'green' */}
      <div className={color === 'green' ? 'green circle on' : `green circle`}></div>
    </div>
  );
}
