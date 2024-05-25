import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Adjust this import based on your UI library setup
import { Input } from "./components/ui/input"; // Adjust this import based on your UI library setup

export default function App() {
  const [url, setUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState({ text: "", start: "", end: "" });
  const [currentTime, setCurrentTime] = useState(0);
  const [displayedCaption, setDisplayedCaption] = useState("");
  const videoRef = useRef(null);

  const handleUrlSubmit = () => {
    if (inputUrl) {
      setUrl(inputUrl);
      setInputUrl("");
    } else {
      alert("Please enter a valid URL");
    }
  };

  const handleAddCaption = () => {
    const { text, start, end } = currentCaption;
    if (text && start && end) {
      setCaptions([...captions, currentCaption]);
      setCurrentCaption({ text: "", start: "", end: "" });
    } else {
      alert("Please fill out all fields for the caption");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const caption = captions.find(caption => 
      currentTime >= caption.start && currentTime <= caption.end
    );
    setDisplayedCaption(caption ? caption.text : "");
  }, [currentTime, captions]);

  return (
    <div className="AppContainer max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-center flex-col mt-20">
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
          <>
            <div className="relative">
              <video ref={videoRef} controls className="h-72" src={url}></video>
              {displayedCaption && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {displayedCaption}
                </div>
              )}
            </div>

            <div className="mt-4 w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-2">Add Captions</h2>
              <Input
                className="mb-2"
                onChange={(e) => setCurrentCaption({ ...currentCaption, text: e.target.value })}
                value={currentCaption.text}
                placeholder="Caption text"
              />
              <Input
                className="mb-2"
                type="number"
                onChange={(e) => setCurrentCaption({ ...currentCaption, start: e.target.value })}
                value={currentCaption.start}
                placeholder="Start time (in seconds)"
              />
              <Input
                className="mb-2"
                type="number"
                onChange={(e) => setCurrentCaption({ ...currentCaption, end: e.target.value })}
                value={currentCaption.end}
                placeholder="End time (in seconds)"
              />
              <Button className="hover:bg-green-700" onClick={handleAddCaption}>
                Add Caption
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
