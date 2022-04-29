import './App.css';

function App() {
  const name="Mobile Operating System";
  const name2="Mobile Manufacturers";

  const models=["Andriod","blackberry","iphone","windows"];
  const companies=["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">
      <div><h3>{name}</h3></div>
<div>
<ul>
{models.map(function(e){
  return <li>{e}</li>
})}
</ul>
</div>

<div><h3>{name2}</h3></div>

<div>
<ul>
{companies.map((e)=>{
  return <li className="square">{e}</li>
})}
</ul>
</div>
    </div>
  );
}

export default App;
