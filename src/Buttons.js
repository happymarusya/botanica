
function Buttons({filteredPlants, setPlants, data}) {
    return (
        <div className="container buttonsColumn">
            <button className="change" onClick={() => setPlants(data)}>Show All</button>
            <button className="change" onClick={() => filteredPlants("palm")}>Palms</button>
            <button className="change" onClick={() => filteredPlants("succulent")}>Succulents</button>
            <button className="change" onClick={() => filteredPlants("ficus")}>Ficuses</button>
            <button className="change" onClick={() => filteredPlants("dracaena")}>Dracaenas</button>
            <button className="change" onClick={() => filteredPlants("other")}>Other</button>
        </div>
    )
}
export default Buttons;
        