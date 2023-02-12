function Plants({anyPlants, textClick}) {
    return (
        <div className="plants">
            {anyPlants.map((element => {
                const {id, name, price, description, image, showMore} = element;

                return (
                    <div className="plant-card" key = {id}>
                        <div className="color">
                            <div className="imageCenter">
                                <img src = {image} alt="Plant" width="220px" height="270px" className="imageCard"/> 
                            </div>

                        <div className="plant-info">
                            <h3>{name}</h3>
                            <br></br>
                            <h3>€ {price}</h3>
                            <br></br>
                            <p>{showMore ? description : description.substring(0,170)+" .... "} 
                            <button className="moreLess" onClick = {() => textClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                        </div>    
                        </div> 
                            <br></br> 
                            <br></br> 
                    </div>
                    
                )
            }))}

        </div>
    )
}
export default Plants;