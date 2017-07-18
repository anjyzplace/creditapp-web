import React from 'react' ;
import axios from 'axios';
require('dotenv').config()


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      result:[],
      textareaMessage: ''
    };
}

componentDidMount(){
   axios.get('http://localhost:8080/application/all')
  //axios.get('https://creditapp-api.herokuapp.com/application/all')
  
  .then(function (response) {
    console.log(response.data);
    console.log(process.env.DOMAIN);
    this.setState({result: response.data});
  }.bind(this));
}

  render() {

    return (
      <div className="yodatalks">
        <ul>
          {this.state.result.map(function(user, i){
            return <div>
              <p className='lead' key={i}>{user.firstName} {user.lastName}    : {user.DateOfBirth} </p>
            </div>
          })}
        </ul>
      </div>
    );
  }

}

export default Home;