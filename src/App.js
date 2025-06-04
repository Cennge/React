import './App.css';

export function SideImage() {
  return (
    <div className="side-image">
      <div className='side-image-text'>
        <p>заповніть вхід до <br></br> 
        облікового запису</p>
      </div>
      <img src="/1.jpg" className="side-image" alt="logo" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <SideImage />
      </>
    </div>
  );
}

export default App;
