class Square extends React.Component {
  render() {
    return (
      <div className="tile">
        <table>
          <tbody>
           <tr>
            <td width="50%" text-align="left">
             <p><b>Card {this.props.number + 1}</b></p>
             <p>Count: {this.props.count}</p>
            </td>
             <td width="50%" align="right">
               <svg id = "svgelem" height = "100" width="100" xmlns = "http://www.w3.org/2000/svg">
                 <circle id = "redcircle" cx = "50" cy = "50" r = "50" fill = {this.props.getbackground} />
               </svg>
             </td>
           </tr>
           <tr>
            <td text-align="left">
              <font color="red" onClick={this.props.minus}>minus</font>
            </td>
            <td align="right">
             <font color="green" onClick={this.props.plus}>plus</font>
            </td>
           </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: Array(12).fill(0),
      };
    }

  renderSquare(i) {
    return <Square number={i}
    count={this.state.count[i]}
    minus={()=>{this.minus(i)}}
    plus={()=>{this.plus(i)}}
    getbackground={this.getbackground(i)}/>;
  }

  minus(i) {
      const count = this.state.count.slice();
      count[i]--;
      this.setState({count: count});
  }

  plus(i) {
      const count = this.state.count.slice();
      count[i]++;
      this.setState({count: count});
  }
  
  getbackground(i)
  {
    const forDiv = this.state.count.slice()[i];
    var forCount = forDiv % 8;
    if (forDiv < 0)
      {
        forCount = 8 - (-forDiv % 8);
      }
    switch (forCount)
      {
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
    for (let i = 0; i < 12; i++)
      {
        var forConcat = this.renderSquare(i);
        forReturn = forReturn.concat(forConcat);
      }
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if(isMobile)
      {
         return (<div className="mobileBoard">
            <h3>Counters</h3>
            {forReturn}
            </div>);
      }
      return (
        <div className="counters">
        <p><h3>Counters</h3></p>
        <ul>
          <li>Card</li>
        </ul>
        <div className="board">
        {forReturn}
        </div>
      </div>
    );
  }
}

class Tiles extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Board />
        </div>
        <div>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Tiles />,
  document.getElementById('root')
);
