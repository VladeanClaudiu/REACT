import React, { Component } from "react";
import data from './champions.json';
 
class Champions extends React.Component {
        constructor() {
            super();
            this.state = {
              champData: '',
              image: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          };
          
          handleChange(event){
            this.setState({champData: event.target.value})
            console.log(this.state.champData);
          }

          handleSubmit(event){
              this.setState({champData: event.target.value});
              console.log(this.state.champData);
              fetch(data)
              .then(response => {
                  if(response.ok) return response.json();
                  throw new Error('Request failed.');
                })
                .then(data => {
                  const name = data.data.name;
                  this.setState( {champData: name} );
                })
                .catch(error => {
                  console.log(error);
                });
              }
            
         
    componentWillMount() {
       
        console.log(data.data.Jax);
    
       
    }
    
  render() {
    return (
      <div>
        <h2>Champions</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value}
                onChange={this.handleChange}/>
                <input type="submit" value="Search"/><br/>
                <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + this.state.champData +".png"}></img>
            </form>
      </div>
    );
  }
}
 
export default Champions;