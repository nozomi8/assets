import Welcomtext from "./Welcometext"
import Imagesidebar from "./Imagesidebar"

export default function Main() {
  return (
    <main>
      <Welcomtext /> 
      <aside>
        <Imagesidebar />
      </aside>
    </main>
  );
}