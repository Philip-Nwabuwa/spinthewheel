import { useMemo, useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import clapping from "../assets/clapping.wav"

export default function Wheel() {
  const [segments, setSegments] = useState<string[]>([
    
  ]);

  console.log(segments);

  const [newSegment, setNewSegment] = useState("");
  const [key, setKey] = useState(0);
  const handleAddSegment = () => {
    if (newSegment.trim() !== "") {
      setSegments([...segments, newSegment]);
      setNewSegment("");
      setKey(key + 1);
    }
  };

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#E53935',
    '#FFEB3B',
    '#9C27B0',
    '#03A9F4',
    '#4CAF50',
  ];
    const onFinished = (winner: any) => {
    const audio = new Audio(clapping);
    audio.play();  };
  const memoizedWheelComponent = useMemo(
    () => (
      <WheelComponent
        key={key}
        segments={segments}
        segColors={segColors}
        onFinished={onFinished}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={250}
        upDuration={200}
        downDuration={800}
        fontFamily="Arial"
        
      />
    ),
    [key, segments, segColors, onFinished]
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        placeholder="Enter new segment"
        value={newSegment}
        onChange={(e) => setNewSegment(e.target.value)}
      />
      <button onClick={handleAddSegment}>Add Segment</button>
      <div>{memoizedWheelComponent}</div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
