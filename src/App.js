import './App.css';
import { Card } from './Components/Cards';


function App() {

  const newSevenWonders = {
    "Great Wall of China": {
      name: "Great Wall of China",
      imgUrl: "/1.png",
      description: "A series of fortifications built across the historical northern borders of ancient Chinese states and Imperial China to protect against nomadic groups. One of the largest construction projects in human history."
    },
    "Petra": {
      name: "Petra",
      imgUrl: "/2.png",
      description: "An ancient city in Jordan, famous for its rock-cut architecture and water conduit system. It's particularly known for Al-Khazneh, 'The Treasury'."
    },
    "Colosseum": {
      name: "Colosseum",
      imgUrl: "/3.png",
      description: "A massive amphitheatre in Rome, Italy, built in the 1st century AD. It was used for gladiatorial contests and public spectacles."
    },
    "Chichen Itza": {
      name: "Chichen Itza",
      imgUrl: "/4.png",
      description: "A large pre-Columbian city built by the Maya people in the Yucatán Peninsula, Mexico. Its most famous structure is the El Castillo pyramid."
    },
    "Machu Picchu": {
      name: "Machu Picchu",
      imgUrl: "/5.png",
      description: "An ancient Inca citadel located high in the Andes Mountains of Peru. It was built in the 15th century and served as a religious and administrative center."
    },
    "Taj Mahal": {
      name: "Taj Mahal",
      imgUrl: "/6.png",
      description: "An exquisite ivory-white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his beloved wife. It's a masterpiece of Mughal architecture."
    },
    "Christ the Redeemer": {
      name: "Christ the Redeemer",
      imgUrl: "/7.png",
      description: "A colossal statue of Jesus Christ in Rio de Janeiro, Brazil, situated atop Mount Corcovado. It is a symbol of both the city and the country."
    }
  };


  return (
    <div className='cards-container'>
      {Object.keys(newSevenWonders).map((key) => (
        <Card key={key} newSevenWonders={newSevenWonders[key]} />
      ))}
    </div>
  );
}

export default App;
