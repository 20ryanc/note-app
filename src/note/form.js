import React from 'react';
import styles from './form.module.css';
import { Editor } from '@tinymce/tinymce-react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: null, numstate:-1, numbtn: -1};
  }
  contentUpdate = () => {
    if(this.state.current != null){
      var content = this.state.current.getContent();
      this.props.contentupdate(content);
    }
  }
  titleUpdate = () => {
    var content = document.getElementById('title').innerText;
    content = content.replace(/\n/g, " ");
    this.props.titleupdate(content)
  }
  componentDidMount(){
    document.getElementById("title").addEventListener("input", this.titleUpdate);
  }
  static getDerivedStateFromProps(props, state) {
    if(state.numstate !== props.numstate() || state.numbtn !== props.numbtn()){
      try{
        var num = props.numstate();
        state.current.setContent(props.arr[num][1]);
        document.getElementById('title').innerHTML = props.arr[num][0];
      }catch(error){

      }
    }
    if(props.numbtn() === 0){
      state.current.setContent("");
      document.getElementById('title').innerHTML = "";
    }
    return {numstate:props.numstate(), numbtn:props.numbtn()}
  }
  render() {
    return (
      <div className={styles.form}>
        <div id="title" className={styles.title} contentEditable="true"></div>
        <div className={styles.editor}>
          <Editor
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            onInit={(evt, editor) => {
              this.setState({ current: editor });
              try{
                var num = this.props.numstate();
                document.getElementById('title').innerHTML = this.props.arr[num][0];
                editor.setContent(this.props.arr[num][1]);
              }catch(error){
        
              } 
            }}
            initialValue=""
            init={{
              init_instance_callback: (editor) => editor.on('change input', () => {this.contentUpdate(); return true;}),
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold underline italic backcolor | fontsizeselect fontselect| alignleft aligncenter ' +
                'alignright alignjustify lineheight | bullist numlist outdent indent | ' +
                'removeformat link image | help |',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14pt }'
            }}
          />
        </div>
      </div>
    );
  }
}

export default MyForm;