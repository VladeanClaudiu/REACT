import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>The riot API</h2><br/>
        <p>To Use the Riot Games API, you must sign in with your League of Legends account.
             When you sign in, a developer portal account is created for you, which generates a development API key associated with your account. 
             Your account will also allow you to communicate with our team regarding your application and usage, and vice versa. 
             For more information on API keys, see the API Keys documentation. 
             Note that every Riot Games API request requires an API key, 
             so you will need to include your API key using the api_key parameter on each request.</p>
             <p>Api keys reset every 24 hours and must be renewed in order to access API data.</p>
        <p>The Riot api allows for connection to active games and player json format data.
            This application accesses live game data and displays selected ids, linked to other Riot Apis.
        </p>
 
        <p>The games displayed remain displayed for the duration of the active game,
             once a new game starts the data will be unique to the players in the new active game.</p>
      </div>
    );
  }
}

export default Home;