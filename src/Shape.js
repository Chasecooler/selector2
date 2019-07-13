import React from "react";

const Shape = props => {
  console.log(props);
  const shape = props.shape;
  const selectShape = props.selectShape; // this is a function
  console.log(shape, selectShape);

  return (
    <div className={shape} onClick={() => selectShape(shape)}>
    </div>
  );
};

export default Shape;

// import React, { Component } from 'react';

// // shape "square", select function()
// // shape made const and given properties via .dot association

// const Shape = (props) => {
//     const shape = props.shape;
//     const selectShape = props.selectShape;