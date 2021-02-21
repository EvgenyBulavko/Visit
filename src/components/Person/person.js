import React from 'react';
import './person.css';

//const image = document.getElementById('img_person');
// image.addEventListener('click', (event) => {
//             image.querySelectorAll('img').forEach(el => el.classList.remove('active'));
//             event.target.classList.add('active');
            
//  });



// function N(e) {
//   if(e==="defaultClass2"){{this.state.Nam =2;}}
// }

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
                <img className={this.state.defaultClass0} onClick={ () => this.editName("defaultClass0")}  src="https://th.wallhaven.cc/small/13/13jqrw.jpg" alt=""/>
                <img className={this.state.defaultClass1} onClick={ () => this.editName("defaultClass1")}  src="https://th.wallhaven.cc/small/13/13jqrw.jpg" alt=""/>
                <img className={this.state.defaultClass2}  onClick={ () => this.editName("defaultClass2")} src="https://th.wallhaven.cc/small/13/13jqrw.jpg" alt=""/>
          </div>
      )
    }
  }
  
  export default Person;