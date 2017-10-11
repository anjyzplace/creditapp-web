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

  render() {
    const divStyle = {
      color: 'blue',
      height: 500,
      backgroundImage: 'url(' + "/got.jpg" + ')',
    };
    return (
      <div className="container marketing">
        <div style={divStyle}>
          <h2>Game of Thrones</h2>
        </div>
        

      <div className="row">
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive center-block" src="/temp.png" alt="Generic placeholder image" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 col-md-pull-7">
          <img className="featurette-image img-responsive center-block" src="/temp.png" alt="Generic placeholder image" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive center-block" src="/temp.png" alt="Generic placeholder image" />
        </div>
      </div>

      <hr className="featurette-divider" />
      </div>
      
      </div>
    );
  }

}

export default Home;