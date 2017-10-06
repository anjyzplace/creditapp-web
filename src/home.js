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
  console.log(process.env.NODE_ENV);
  axios.get(`http://${process.env.REACT_APP_DOMAIN}:8080/application/all`) 
  .then(function (response) {
    this.setState({result: response.data});
  }.bind(this));
}

  render() {
    const divStyle = {
      color: 'blue',
      height: 500,
      backgroundImage: 'url(' + "/got.jpg" + ')',
    };
    return (
      <div className="yodatalks">
        <div style={divStyle}>
          <h2>Game of Thrones</h2>
        </div>
        <ul>
          {this.state.result.map(function(user, i){
            return <div>
              <p className='lead' key={i}>{user.firstName} {user.lastName} - {user.DateOfBirth} </p>
            </div>
          })}
        </ul>
      </div>
    );
  }

}

export default Home;