import Navbar from './Navbar'
import Home from './Home'

const App = () => {

  const function1 = () => {
    console.log("Button is clicked");
  }

  console.log("Im a big dawg big bear nigga im a lion!")
  return (
    <div className='app'>
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  )
}

export default App
