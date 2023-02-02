import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import CardMarking from './CardMarking';

function App() {
  const image = {
    src: logo,
    alt: 'React picture'
  }

  return (
    <div className="App">

      <Cards image={image}>
        <CardMarking title={'Card title'} text={'Some quick example text to build on the card title and make up the bulk of the card\'s content. '} />
      </Cards>

      <Cards>
        <CardMarking title={'Special title treatment'} text={'With supporting text below as a natural lead-in to additional content.'} />
      </Cards>

    </div>
  );
}

export default App;