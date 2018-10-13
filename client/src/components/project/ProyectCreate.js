import React,{Component} from 'react';


export class ProyectCreate extends Component {
  constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: ''
        };
        this.state = this.initialState;
        this.logo=this.props.logo;
    }

 handleChange = event =>{
   const {name,value} = event.target;

   this.setState({
     [name]:value
   })
 }

 submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState);
}

  render(){
    const {title,description}=this.state;

    return (
      <div
        className="class-proyect-create"
        style={{
          border:'2px solid green',
          margin:10,
          paddingBottom:10,
          backgroundColor:'#eabcbc8c'
        }}>
        <div style={{display: 'flex'}}>
          <img src={this.props.logo} alt="logo" style={{flex:1, height:40, paddingTop:10}}/>
          <h2 style={{flex:'1 1 80%'}}>Form to create a new proyect</h2>
          <img src={this.props.logo} alt="logo" style={{flex:1, height:40, paddingTop:10}}/>
        </div>
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
