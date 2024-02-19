import PlayersList from "../components/PlayersList";
import {useState} from 'react';
import { useEffect } from "react";

function Players() {
  const [playersFromAPI, setPlayersFromAPI] =useState([]);


  const url = 'https://tennisapi1.p.rapidapi.com/api/tennis/rankings/wta/live';
const options = {
		'X-RapidAPI-Key': '44e47a62e4mshbb6f5802b050ea2p1fea7fjsn67a577941cfe'
};

 useEffect(() => {
 fetch(url, options)
	.then(response => response.json())
  .then(data => setPlayersFromAPI(data))

 }, [])

 console.log(playersFromAPI);

  return(
    <div className="Players">
      <h1>Top Tennis Players of the year</h1>
      <PlayersList playersAtp={playersFromAPI} />
    </div>
  );
}

export default Players;