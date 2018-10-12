import React,{Component} from 'react';


export class ProyectCreate extends Component {
  constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: ''
        };
        this.state = this.initialState;
    }

 handleChange = event =>{
   const {name,value} = event.target;

   this.setState({
     [name]:value
   })
 }

 submitForm = () => {
   console.log(this.state);
    this.props.handleSubmit(this.state)
    this.setState(this.initialState);
}

  render(){
    const {title,description}=this.state;

    return (
      <div style={{
        border:'1px solid green',
        margin:20,
        paddingBottom:10,
        backgroundColor:'#eabcbc8c'
      }}>
        <h2>Form to create a new proyect</h2>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange} />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}/>
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm} />
        </form>
      </div>
    )
  }
}
