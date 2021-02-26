import React from 'react';

class Lv extends React.Component {
     
     
  
    render () {
        
      return (
          <div>
              <a onClick={ () => this.props.upLv(0)}>1</a>
              <a onClick={ () => this.props.upLv(1)}>2</a>
              <a onClick={ () => this.props.upLv(2)}>3</a>
          </div>
      )
    }

}


export default Lv;