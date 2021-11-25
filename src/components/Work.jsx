import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div className="pl-32 max-w-2xl">
        <div className="flex flex-row pt-10 pb-5">
          <p className="text-7xl font-bold text-darkSand">03. </p>
          <p className="text-7xl font-bold text-white">Work</p>
          <hr
            style={{
              color: "gray",
              backgroundColor: "red",
              height: 5,
            }}
          />
        </div>
      </div>
    );
  }
}
