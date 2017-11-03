import React from "react";
// import { render } from "react-dom";
import Form from "react-jsonschema-form";
import axios from 'axios';



const schema = {
    title: "Contact Us",
    type: "object",
    required: ["firstName", "email"],
    properties: {
        firstName: { type: "string", title: "First Name" },
        lastName: { type: "string", title: "Last Name"},
        email: { type: "string", title: "Email"},
        message: { type: "string", title: "Messagee"},
        
    }
};

const uiSchema = {
  email: { "input[type=email]": "date" },
    firstName: {"ui:placeholder": "e.g. John"},
    lastName: {"ui:placeholder": "e.g. Smith" },
    message: {
      "ui:widget": "textarea"
    },
};

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => process(formData);
;
function process(e) {
  console.log(`yay I'm valid!`);
    axios.post(`http://localhost:8080/contact`, e)
  .then(function (response) {
    console.log(response);
    window.location.href="/contactus/thankyou" ;
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(e);
}

class Contact extends React.Component {

  componentDidMount(){
    console.log(process.env.NODE_ENV);
  }
    
    render(){
    return(
        (
        <Form schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={onSubmit}
                //onSubmit={log("submitted")}
                onError={log("errors")} />
            )
);
    }
}   
export default Contact;