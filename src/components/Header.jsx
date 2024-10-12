import Nav from "./Nav"

export default function Header() {
  return (
    <header>
      <div>
        <h1>Birdwatching</h1>
      </div>
      <div className="img">
        <img 
          src="dove.png" 
          alt="a simple dove logo"
        />
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}