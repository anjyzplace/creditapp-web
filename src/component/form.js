import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import axios from 'axios';

const schema = {
    title: "Credit Application ",
    type: "object",
    required: ["firstName"],
    properties: {
        firstName: { type: "string", title: "First Name", default: "e.g. John" },
        lastName: { type: "string", title: "Last Name", default: "e.g. Smith" },
        DateOfBirth: { type: "string", title: "Date of Birth", default: "DD-MM-YYYY" },

    }
};

const uiSchema = {
    DateOfBirth: { "ui:widget": "date" },
};
const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => process(formData);

function process(e) {
    console.log("Hello");
    axios.post('http://localhost:8080/application/create', e)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(e);
}

class myForm extends React.Component {
    
    render(){
        return(
            (
  <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        //onSubmit={log("submitted")}
        onError={log("errors")} />
));
    }
}   
export default myForm;