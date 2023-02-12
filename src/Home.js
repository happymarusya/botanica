import { data } from "./data";
import { useState } from "react";
import Buttons from "./Buttons";
import Plants from "./Plants";
import Video from "./Video";


function Home() {
    const [plants, setPlants] = useState(data);
    const [showText, setShowText] = useState(false);

    const chosenPlants = (searchTerm) => {
        const newPlants = data.filter(element => element.searchTerm === searchTerm);
        setPlants(newPlants);
    }

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return (
        <div>
            <Video/> 
            <section id ="down"></section>
            <Buttons filteredPlants = {chosenPlants} setPlants = {setPlants} data = {data}/>
            <Plants anyPlants = {plants} textClick = {showTextClick}/>
        </div>
    )
}
export default Home;