import React from 'react';
import ReactDOM from 'react-dom';
import data from './champ_data.json';


export default class Player extends React.Component {
    render() {
          return(
            
          <div class="Class100 col-md-2 game-player">
            <h5 class="playerHeadings">Summoner Name:</h5>
              <p class="summonerName">{this.props.summonername}</p>
            <ul class="col-md-4">
            <h5 class="playerHeadings">Champion: </h5>
              <p class="headingData">{this.props.chID}</p>
              <p class="headingData">{this.props.cname}</p>
            <h5 class="playerHeadings">SumSpells: </h5>
              <p class="headingData">{this.props.ss1}</p>
              <p class="headingData">{this.props.ss2}</p> 
            <h5 class="playerHeadings">Profile: </h5>
              <p class="headingData">{this.props.profileIcon}</p>
            <h5 class="playerHeadings">TeamSide: </h5>
              <p class="headingData">{this.props.teamSide}</p>
              </ul><br/>
          </div>
        )
    
    }
  }