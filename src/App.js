import './App.css';
import Video from './pages/video';
import db from './config/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore/lite"


export default function App() {

  let maxHeight;
  if(window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [videos, setVideos] = useState([])
  async function getVideos() {
    const videosCollection = collection(db, "videos") //use the videos collection from Firebase RTDB
    const videosSnapshot = await getDocs(videosCollection) //storage the the data from this collection
    const videosList = videosSnapshot.docs.map(doc => doc.data()) // loaded videos information on the application
    setVideos(videosList)
  }
  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="App__videos">
        { videos.map((item) => {
          return (
            <Video 
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={ item.description }
            music={item.music}
            url={item.url}
          />
            )
          }) }
      </div>

    </div>
  );
}

