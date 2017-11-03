import React from 'react';

class ThankYou extends React.Component {

  componentDidMount(){
    console.log(process.env.NODE_ENV);
  }
  
  render(){
    const divStyle = {
      height: 500,
      backgroundImage: 'url(' + "/minion.png" + ')',
    };
    return (
      <div className="text-center">
        <h2>Thank you for contacting us</h2>
        <div>
          <img src="/minion.png" width="70%"/>
        </div>
      </div>
    );
  }
}
export default ThankYou;