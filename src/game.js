import React from 'react';
import ReactDOM from 'react-dom';
import data from './champ_data.json';
import ListSteam from './liststeam';
import Player from './player';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      champName: 'Teemo',
      index: 0,
      games2: [],
      champData: [],
      id: []
    };
  }

  componentWillMount() {
    
    const API = "3973b452-4455-44dc-bab7-ce910092d190";
    //let to_Search = 'Jax';
    //API HAS TO BE CHANGED EVERY 24 HOURS.
    fetch('https://euw1.api.riotgames.com/lol/spectator/v3/featured-games?api_key=RGAPI-'+API)
    
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState( {
        games2: data.gameList[this.state.index].participants
      }, function(){
        this.setState( {
        id: this.state.games2.championId
       
      }); 
      //console.log(this.state.id);
      })
      this.setState( {
        index: this.state.index+1
      })
      
      console.log(this.state.games2);
    })
    .catch(error => {
      console.log(error);
    });
    // ------------------------------------------------------------
    //Fetches Champion Name and ID
    // ------------------------------------------------------------
    //fetch('https://euw1.api.riotgames.com/lol/static-data/v3/champions/'+this.state.chID+'?locale=en_US&api_key=RGAPI-'+API)
    console.log(data);
    fetch(data)
    
    // ------------------------------------------------------------
    //Fetches Champion Image based on name
    // ------------------------------------------------------------

    

    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'+ this.state.champName +'.png')
  }

  render() {
    const gameplayers = this.state.games2.map( (u,i) => {
      return <Player key={u.summonerName} 
                      summonername={u.summonerName}
                        chID={u.championId} 
                          ss1={u.spell1Id} 
                            ss2={u.spell2Id}
                              profileIcon={u.profileIconId}
                                teamSide={u.teamId} />;
    });
    // const champdata = this.state.champData.map( (u,i) => {
    //   return <Player key={u.id} 
    //                   cname={u.name} />;
    // });
    return(
      
      <div class="container">
      <div class="col-md-6 game-mode">
        <h3>Game Mode: {this.props.gamemode}</h3>
      </div>
      <div class="col-md-6 ">
        <h3>Match Type: {this.props.gametype}</h3>
      </div>
        {gameplayers}
        {/* {champdata} */}
      </div>
    );
    
  }

}