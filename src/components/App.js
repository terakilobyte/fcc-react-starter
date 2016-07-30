import React, {PropTypes} from 'react';
import '../styles/application.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.children}
        <div className='box-trigger'>
          <div className='box' />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any
};

export default App;
