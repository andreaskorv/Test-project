class Square extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "tile"
    }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      width: "50%",
      "text-align": "left"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Card ", this.props.number + 1)), /*#__PURE__*/React.createElement("p", null, "Count: ", this.props.count)), /*#__PURE__*/React.createElement("td", {
      width: "50%",
      align: "right"
    }, /*#__PURE__*/React.createElement("svg", {
      id: "svgelem",
      height: "100",
      width: "100",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("circle", {
      id: "redcircle",
      cx: "50",
      cy: "50",
      r: "50",
      fill: this.props.getbackground
    })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      "text-align": "left"
    }, /*#__PURE__*/React.createElement("font", {
      color: "red",
      onClick: this.props.minus
    }, "minus")), /*#__PURE__*/React.createElement("td", {
      align: "right"
    }, /*#__PURE__*/React.createElement("font", {
      color: "green",
      onClick: this.props.plus
    }, "plus"))))));
  }

}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Array(12).fill(0)
    };
  }

  renderSquare(i) {
    return /*#__PURE__*/React.createElement(Square, {
      number: i,
      count: this.state.count[i],
      minus: () => {
        this.minus(i);
      },
      plus: () => {
        this.plus(i);
      },
      getbackground: this.getbackground(i)
    });
  }

  minus(i) {
    const count = this.state.count.slice();
    count[i]--;
    this.setState({
      count: count
    });
  }

  plus(i) {
    const count = this.state.count.slice();
    count[i]++;
    this.setState({
      count: count
    });
  }

  getbackground(i) {
    const forDiv = this.state.count.slice()[i];
    var forCount = forDiv % 8;

    if (forDiv < 0) {
      forCount = 8 - -forDiv % 8;
    }

    switch (forCount) {
      case 0:
        return 'red';

      case 1:
        return 'blue';

      case 2:
        return 'green';

      case 3:
        return 'yellow';

      case 4:
        return 'cyan';

      case 5:
        return 'magenta';

      case 6:
        return 'black';

      case 7:
        return 'gray';
    }

    return 'red';
  }

  render() {
    var forReturn = [];

    for (let i = 0; i < 12; i++) {
      var forConcat = this.renderSquare(i);
      forReturn = forReturn.concat(forConcat);
    }

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return /*#__PURE__*/React.createElement("div", {
        className: "mobileBoard"
      }, /*#__PURE__*/React.createElement("h3", null, "Counters"), forReturn);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "counters"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("h3", null, "Counters")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Card")), /*#__PURE__*/React.createElement("div", {
      className: "board"
    }, forReturn));
  }

}

class Tiles extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Board, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("ol", null)));
  }

} // ========================================


ReactDOM.render( /*#__PURE__*/React.createElement(Tiles, null), document.getElementById('root'));
