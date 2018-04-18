import React from 'react';
import ReactDOM from 'react-dom';
import data from './champ_data.json';
import Game from './game';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./home";
  import Champions from "./champions";


class ListSteam extends React.Component {
    constructor() {
      super();
      this.state = {
        games: []
      };
    }
  
    componentWillMount() {
      const API = "RGAPI-3973b452-4455-44dc-bab7-ce910092d190";
      //let to_Search = 'Jax';
      //API HAS TO BE CHANGED EVERY 24 HOURS.
      fetch('https://euw1.api.riotgames.com/lol/spectator/v3/featured-games?api_key='+API)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState( {
          games: data.gameList
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  
    render() {
        const gamelist = this.state.games.map( (u,i) => {
          return <Game key={u.gameId} gamemode={u.gameMode} gametype={u.gameType}/>;
        }); 
        return (
            <HashRouter>
          <div class="container">
          
            <div>
          <h1>Riot API</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/champions">Champions</NavLink></li>
            <li><NavLink to="/">Random Game</NavLink></li>
          </ul>
          <div className="content"> 
          <Route path="/home" component={Home}/>
          <Route path="/champions" component={Champions}/>
          <Route path="/game" component={Game}/>
          
          </div>
        </div>
        
            <h1 class="title">Active Game </h1>
            {gamelist[0]}      
            </div>
               </HashRouter>      
        );
    }
  }

  export default ListSteam;