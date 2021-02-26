import React from 'react';
import './person.css';


import head1 from "../images/head1.png";
import head2 from "../images/head2.png";
import head3 from "../images/head3.png";

class Person extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          name: {},
          defaultClass0: "img_person active",
          defaultClass1:"img_person",
          defaultClass2:"img_person"
        };
    }
    editName = (names)=>{
        this.setState({defaultClass0:"img_person"});
        this.setState({defaultClass1:"img_person"});
        this.setState({defaultClass2:"img_person"});
        this.setState({[names]:"img_person active"});
       let Nom = Number(names[12]);
       console.log(Nom);
       this.props.NamPers(Nom);
       }
  
    
  
    render () {
        
      return (
          <div className="bar__person">
            <div><a>Choose your character</a>
              </div>
                <img className={this.state.defaultClass0} onClick={ () => this.editName("defaultClass0")}  src={head1} alt=""/>
                <img className={this.state.defaultClass1} onClick={ () => this.editName("defaultClass1")}  src={head2} alt=""/>
                <img className={this.state.defaultClass2}  onClick={ () => this.editName("defaultClass2")} src={head3} alt=""/>
          </div>
      )
    }
  }
  
  export default Person;