import React, {Component} from 'react';
import './App.css';
import Person from './components/Person';


class App extends Component{

  state = {
    persons:[
      {name:'Hari', age:25},
      {name:'Giri', age:26},
      {name:'Mohan', age:28},
    ],
    showPersons: false
  }

  personsToggleHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons : !showPersons
    })
    
  }

  render(){

    const {persons} = this.state;

    return (
          <div className="App">
            <h1>Hello React..</h1>

          <button onClick={this.personsToggleHandler.bind(this)}>Show Persons</button>

        {
          this.state.showPersons &&
          <div>
            <Person name={persons[0].name} age={persons[0].age} />
            <Person name={persons[1].name} age={persons[0].age} />
            <Person name={persons[2].name} age={persons[0].age} />
          </div>
        }
          </div>
      
        );
  };

}


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <div>
//         <h1>Hello 1</h1>
//       </div>
//     </div>

//   );
// }

export default App;
