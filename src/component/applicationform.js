import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import axios from 'axios';
import config from './config';


const schema = {
    title: "Credit Application ",
    type: "object",
    required: ["firstName", "DateOfBirth"],
    properties: {
        firstName: { type: "string", title: "First Name" },
        lastName: { type: "string", title: "Last Name"},
        DateOfBirth: { type: "string", title: "Date of Birth" },
        resStatus: { type: "string", title: "Residential Status"},
        income: { type: "string", title: "Monthly Income"},
        empStatus: { type: "string", title: "Employment Status"},
        noOfDependants: { type: "string", title: "Number of Dependants"},
        addressYears: { type: "string", title: "Years at current address"},
        addressMonths: { type: "string", title: "Months at current address"},
        creditLimit: { type: "string", title: "Credit Limit"},
    }
};

const uiSchema = {
    DateOfBirth: { "ui:widget": "date" },
    firstName: {"ui:placeholder": "e.g. John"},
    lastName: {"ui:placeholder": "e.g. Smith" },
    DateOfBirth: {"ui:placeholder": "YYYY-MM-DD"},
};

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => process(formData);
;
function process(e) {

    axios.post(`http://${config.URL}:8080/application/create`, e)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(e);
}

class ApplicationForm extends React.Component {

    
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
export default ApplicationForm;