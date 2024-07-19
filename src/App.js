import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      App
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger outline>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
