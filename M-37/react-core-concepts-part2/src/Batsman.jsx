import { useState } from "react";
export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes]= useState(0);
    const handleSingles = () => {
        const updatedRuns = runs +1;
        setRuns(updatedRuns);
    }


    const handleSixes = () => {
        const updatedRuns = runs +6;
        setRuns(updatedRuns);

        const updateSixes =sixes + 1;
        setSixes(updateSixes);
    }
    return (
        <div> 
            <p>Player: Bangla Batsman</p>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>Your score: 50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingles}>singles</button>
            <button>Four</button>
            <button onClick={handleSixes}>Six</button>

        </div>
    )
}