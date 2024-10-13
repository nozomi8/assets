import Nav from "./Nav"

export default function Header() {
  return (
    <header>
      <h1>Birdwatching</h1>
      <img 
        src="/public/images/dove.png" 
        alt="a simple dove logo"
      />
      <Nav /> 
    </header>
  );
}