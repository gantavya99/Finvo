import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster, toast } from "react-hot-toast";
import VideoPlayer from "./components/ui/Videoplayer";
import CaptionForm from "./components/ui/CaptionForm";


export default function App() {
  const [url, setUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const handleUrlSubmit = () => {
    if (inputUrl) {
      setUrl(inputUrl);
      setInputUrl("");
    } else {
      toast.error("Please enter a valid URL");
    }
  };

  const handleAddCaption = (newCaption) => {
    setCaptions([...captions, newCaption]);
    toast.success("Caption added successfully!");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AppContainer max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-center mt-8 flex-col">
        <div className="flex m-4">
          <Input
            className="min-w-96"
            onChange={(e) => setInputUrl(e.target.value)}
            value={inputUrl}
            placeholder="Enter video URL"
          />
          <Button className="hover:bg-green-700 mx-2" onClick={handleUrlSubmit}>
            Submit
          </Button>
        </div>

        {url && (
          <div className="flex flex-col">
            <VideoPlayer url={url} captions={captions} currentTime={currentTime} videoRef={videoRef} />
            <CaptionForm onAddCaption={handleAddCaption} />
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}
