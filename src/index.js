import React from 'react';
import ReactDOM from 'react-dom';
import MySidenavbar from './sidenav.js';
import MyForm from './form.js';

//var content = [["1","123"],["2","223"],["3","323"],["4","423"]]
var content = [["",""]];

class Index extends React.Component {
  constructor() {
    super();
    this.state = { wasbig: false, numbtn: content.length, numstate: 0};
    this.contentArr = content;
  }
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  resize = () => {
    if (window.innerWidth > 800) {
      this.setState({ wasbig: true });
      this.openNav();
    } else if (this.state.wasbig) {
      this.closeNav();
    }
  }
  getNumState = () => {
    return this.state.numstate;
  }
  setNumState = (s) => {
    this.setState({numstate:s});
  }
  getNumBtn = () => {
    return this.state.numbtn;
  }
  newbtn = () => {
    this.setState({ numbtn: this.state.numbtn + 1 });
  }
  rmbtn = () => {
    this.setState({ numbtn: this.state.numbtn - 1});
  }
  updateTitle = (title) => {
    this.contentArr[this.state.numstate][0] = title;
    this.forceUpdate();
  }
  updateFormContent = (content) => {
    this.contentArr[this.state.numstate][1] = content;
    this.forceUpdate();
  }
  render() {
    return (
        <div>
        <MySidenavbar 
          numbtn={this.getNumBtn}
          numstate={this.getNumState}
          openNav={this.openNav}
          closeNav={this.closeNav}
          newbtn={this.newbtn}
          rmbtn={this.rmbtn}
          setnumstate={this.setNumState}
          arr={this.contentArr}/>
        <MyForm 
          contentupdate={this.updateFormContent}
          titleupdate={this.updateTitle}
          numbtn={this.getNumBtn}
          numstate={this.getNumState}
          arr={this.contentArr}/>
      </div>

    );
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));

