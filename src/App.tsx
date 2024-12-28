import './App.css'
import VideoPlayer from './Components/VideoPlayer'

function App() {

  return (
   <>
    Live Streaming app
    <br/>
    <VideoPlayer 
      //  src={"https://livestreamingrtmpserver-itpw.onrender.com/live"}
      src={"http://localhost:8080/live/test.flv"}
    />
   </>
  )
}

export default App
