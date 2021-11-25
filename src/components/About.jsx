import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center min-w-full h-screen">
        <div className="px-32 max-w-6xl">
          <div className="text-4xl font-thin text-lightSand py-2">
            👋🏼 Hello, my name is
          </div>
          <div className="text-8xl font-bold text-white">Fernando Salcedo.</div>
          <div className="text-8xl font-semibold text-gray">
            I like to build things.
          </div>
          <div className="text-3xl font-extralight text-gray py-4">
            I'm an architect turned full-stack developer who is passionate about
            building excellent products for people.
          </div>
        </div>
      </div>
    );
  }
}
