import React from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring";
import { Transition } from "react-spring";
import { Trail } from "react-spring";

class App extends React.Component {
  // componentDidMount() {
  //   var start = null;
  //   var element = document.getElementById("test");

  //   function step(timestamp) {
  //     console.log(timestamp);

  //     if (!start) start = timestamp;
  //     var progress = timestamp - start;
  //     element.style.transform =
  //       "translateX(" + Math.min(progress / 10, 200) + "px)";
  //     if (progress < 2000) {
  //       window.requestAnimationFrame(step);
  //     }
  //   }

  //   window.requestAnimationFrame(step);
  // }

  state = {
    inputField: "",
    items: [],
    myToggle: true
  };

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      console.log(e.target.value);

      this.setState({
        inputField: "",
        items: [
          ...this.state.items,
          {
            text: e.target.value,
            key: +new Date()
          }
        ]
      });
    }
  };

  _handleItemPress = e => {
    const index = this.state.items.findIndex(i => i.key === e);
    const items = [...this.state.items];
    items.splice(index, 1);
    if (index > -1) {
      this.setState({ items });
    }
  };

  render() {
    const items = this.state.items;
    const myData = [
      { text: "Aasdasd", key: "123" },
      { text: "Basdas", key: "1213" },
      { text: "Casdasda", key: "12543" },
      { text: "Daaasdasd", key: "1323" },
      { text: "Eddaasdsa", key: "2123" }
    ];

    return (
      <div>
        {/* <h1> Matis - React </h1>
        <input
          type="text"
          onChange={e => this.setState({ inputField: e.target.value })}
          onKeyPress={this._handleKeyPress}
          value={this.state.inputField}
        />
        <Transition
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(0,40px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-40px,0)" }}
        >
          {item => props => {
            return (
              <div
                style={props}
                onClick={() => this._handleItemPress(item.key)}
              >
                {item.text}
              </div>
            );
          }}
        </Transition>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => {
            return (
              <div style={props}>
                <h1>hello</h1>
              </div>
            );
          }}
        </Spring>
        <Transition
          items={this.state.myToggle}
          from={{
            position: "absolute",
            left: "200px",
            fontSize: "30px",
            opacity: 0,
            transform: "rotateZ(0deg)"
          }}
          enter={{ opacity: 1, transform: "rotateZ(30deg)" }}
          leave={{ opacity: 0, transform: "rotateZ(0deg)" }}
        >
          {toggle =>
            toggle
              ? props => <div style={props}>😄</div>
              : props => <div style={props}>🤪</div>
          }
        </Transition>
        <h1 onClick={() => this.setState({ myToggle: !this.state.myToggle })}>
          TOGGLE
        </h1> */}
        <Trail
          items={myData}
          keys={item => {
            console.log(item);

            return item.key;
          }}
          from={{ transform: "rotateZ(0deg)" }}
          to={{ transform: "rotateZ(-30deg)" }}
        >
          {item => props => (
            <span style={{ ...props, display: "block" }}>{item.text}</span>
          )}
        </Trail>
        <Spring from={{ number: 0 }} to={{ number: 1 }}>
          {props => <h1>{props.number}</h1>}
        </Spring>
      </div>
    );
  }
}

export default App;
