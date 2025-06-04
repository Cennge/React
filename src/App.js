import logo from './logo.svg';
import './App.css';

export function MyBook() {
  return (
    <div className="CardComponent">
      <h1>My Book</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>I like this book!!! React!!! Yeaaaa.</p>
      <p>Something about...</p>
      <br></br>
      <h5>2025-2025...</h5>
    </div>
  );
}

export function MyMusicGroup() {
  return (
    <div className="CardComponent">
      <h1>AMERICAN RAP</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Cool Music Kanye West  fortnite</p>
      <p>I like this song so much.</p>
       <br></br>
       <p>#Music #vibe #iwannasleep</p>
    </div>
  );
}

export function MyCooking() {
  return (
    <div className="CardComponent">
      <h1>My Cooking</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>I love cooking!</p>
      <p>Here are some of my favorite recipes.</p>
      <br></br>
      <h5>Cooking is fun!</h5>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className='Cards'>
        <MyBook />
        <MyMusicGroup />
        <MyCooking />
      </div>
    </div>
  );
}

export default App;
