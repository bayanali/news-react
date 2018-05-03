import React from 'react';
import './footer.css';
import next from '../../images/next.png';

export default class Form extends React.Component {
  state = {
    email : ""
  };

change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  this.setState({email : ""}); //to make input empty again
  console.log(this.state);
}

render(){
    return (
      <form>
        <div className = "input-group">
            <input
                type="text"
                name = "email"
                className = "form-control"
                placeholder="Enter Email Address"
                value = {this.state.email}
                onChange = {e => this.change(e)}/>
                <button
                    className = "btn btn-secondary"
                    type = "submit"
                    formAction="#"
                    onClick = {e => this.onSubmit(e)}
                    >
                    <img src = {next} className = "img-icon"/>
                </button>
            </div>
     </form>
    );
  }





}
