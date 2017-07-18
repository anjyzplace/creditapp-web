import React from 'react';


class ApplicationForm extends React.Component {

      constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

 submitForm(){
    //alert("The form was submitted");
    var elements = this.refs.form.getDOMNode().elements;
    console.log("Helloooo");
    console.log(elements);
}
process(){
// $( "form" ).submit(function( event ) {
// var myarray = $( this ).serializeArray();
// console.log(objectifyForm(myarray));
// function objectifyForm(formArray) {//serialize data function

// var returnArray = {};
// for (var i = 0; i < formArray.length; i++){
// returnArray[formArray[i]['name']] = formArray[i]['value'];
// }
// return returnArray;
// }
// event.preventDefault();
// });
}


render(){

    return(
        <div className="row">
            <div className="col-md-6">
                <form ref='form' onSubmit={this.submitForm} >
                <label htmlFor="firstname">First Name</label>
                <input></input>
                <hr></hr>
                <label htmlFor="lastname">Last Name</label>
                <input></input>
                <hr></hr>
                <label htmlFor="firstname">Date of Birth</label>
                <input></input>
                <hr></hr>
                <input type="submit" value="Submito"/>
                </form>
            </div>
            
        </div>
    );
}
}
export default ApplicationForm;