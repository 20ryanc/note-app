import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Title", content: "Preview of Content for Easy Reference" };
  }
  click = () => {
    this.props.push(this.props.number);
  }
  close = () => {
    if(window.confirm("Are you sure you want to delete this note? This action cannot be undone!")){
      this.props.arr.splice(this.props.number, 1);
      this.props.pop();
    }
  }
  static getDerivedStateFromProps(props, state) {
    var stripped = props.arr[props.number][1].replace(/(<([^>]+)>)/gi, "");
    stripped = stripped.replace(/\n/g, " ");
    stripped = stripped.replace(/&nbsp;/gi, '');
    if (stripped === "") {
      stripped = "Preview of Content for Easy Reference";
    }
    var modtitle = props.arr[props.number][0];
    if(modtitle === ""){
      modtitle = "Title";
    }
    return { title:modtitle , content:stripped};
  }
  render() {
    return (
      <>
        <button onClick={this.close}>&#10006;</button>
        <div onClick={this.click}>
          <h1>{this.state.title}<br /><span>{this.state.content}</span></h1>
        </div>
      </>
    );
  }
}

export default Button;