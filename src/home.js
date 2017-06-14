import React from 'react' ;
import axios from 'axios';


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
  .then(function (response) {
    console.log(response.data);
    this.setState({result: response.data});
  }.bind(this));
}

  render() {

    return (
      <div className="yodatalks">
        <ul>
          {this.state.result.map(function(user, i){
            return <p key={i}>{user.firstName} {user.lastName}</p>
          })}
        </ul>
      </div>
    );
  }

}

export default Home;