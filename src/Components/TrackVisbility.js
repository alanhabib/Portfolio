import React, { Component } from "react";

export default class TrackVisbility extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.animationNavHandler();
  }

  animationNavHandler = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.7) {
          return this.props.onVisible();
        }
      },
      {
        threshold: 0.7
      }
    );
    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  };

  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}
