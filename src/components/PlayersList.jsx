import PlayersCard from "./PlayersCard";

function PlayersList(props) {
  const {playersAtp} = props;
  console.log(playersAtp);
  if(!Array.isArray(playersAtp)) {
    return <p>No players found</p>
  } 
    return(
    <div className="PlayerList">
      <h2>ATP Ranking</h2>
      {playersAtp && playersAtp.map((player) =>(
      <PlayersCard key={player.data.id} player={player.data} /> 
      ))}
    </div>
  );
  
}

export default PlayersList;