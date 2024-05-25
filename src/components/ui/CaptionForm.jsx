import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "./input";
import {toast} from 'react-hot-toast';

const CaptionForm = ({ onAddCaption }) => {
  const [currentCaption, setCurrentCaption] = useState({ text: "", start: "", end: "" });

  const handleAddCaption = () => {
    const { text, start, end } = currentCaption;
    if (text && start && end) {
      onAddCaption(currentCaption);
      setCurrentCaption({ text: "", start: "", end: "" });
    } else {
      toast.error("Please enter all fields");
    }
  };

  return (
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
  );
};

export default CaptionForm;
