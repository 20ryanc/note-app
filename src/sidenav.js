import React from 'react';
import styles from './index.module.css';
import Button from './buttons';

class MySidenavbar extends React.Component {
  newbtn = () => {
    this.props.arr.push(["",""]);
    this.props.newbtn();
    this.forceUpdate();
  }
  rmbtn = () =>{
    this.props.rmbtn();
  }
  btnPush = (s) => {
    this.props.setnumstate(s);
  }
  render() {
    const children = [];
    for (let i = 0; i < this.props.numbtn(); i++) {
      children.push(<Button 
        push={this.btnPush} 
        pop={this.rmbtn}
        key={i} 
        number={i} 
        numstate={this.props.numstate}
        contentupdate={this.props.contnentupdate}
        titleupdate={this.props.titleupdate}
        arr={this.props.arr}/>);
    }
    return (
      <div>
        <div id="mySidenav" className={styles.sidenav}>
          <h2 className={styles.closebtn} onClick={this.props.closeNav}>&times;</h2>
          <h1 onClick={this.newbtn}>Notes +</h1>
          {children}
        </div>
        <span className={styles.openBtn} onClick={this.props.openNav}>&#9776; open</span>
      </div>
    );
  }
}
export default MySidenavbar;