import { StrictMode } from "react";
import Nav from './components/Nav';
import Header from './components/Header';
import Link from "./components/link";

function App() {
  return (
    <StrictMode>
      <Header>
        <header className="text-gray-900 text-center text-3xl float-left">{'<SS />'}</header>
        <Nav>
          <Link>About</Link>
          <Link>Work</Link>
          <Link>Testimonials</Link>
          <Link>Contact</Link>
        </Nav>
      </Header>
    </StrictMode>
  );
}
export default App;