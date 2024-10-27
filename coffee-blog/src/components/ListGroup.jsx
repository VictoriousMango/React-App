import { useState } from "react"

function ListGroup( props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [coffeeClass, setCoffeeClass] = useState("");
    const sideBarElementHandler = (index, coffeeClass) => {
        setSelectedIndex(index);
        setCoffeeClass(coffeeClass);
        
    }
    return (
        <>
            <div className="row">
                <div className="col mt-4 mx-4">
                    <ul className="list-group ">
                        {props.sideBarElements.map(
                            (element, index) =>
                                <li
                                    className={
                                        selectedIndex === index ? "list-group-item d-flex justify-content-between align-items-center active" : "list-group-item d-flex justify-content-between align-items-center"
                                    }
                                    key={index}
                                    onClick={() => sideBarElementHandler(index, element.coffeeClass)}
                                >
                                    <img src={element.img} alt={element} /><span className="badge text-bg-info rounded-pill">{element.options}</span>
                                </li>
                        )}
                    </ul>
                </div>
                <div className="col-10 mt-4">
                    <div className="row g-4">
                        {props.coffee_names.map(
                            (coffee) =>
                                coffee.ingredients.includes(coffeeClass) &&
                                <div className="col">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <h5 className="card-header text-center">{coffee.name}</h5>
                                        <div className="card-body">
                                            <img src={coffee.img} alt={coffee.name} style={{alignItems:"center", justifyContent:"center", display:"flex"}} />
                                            <hr />
                                            <h6 className="card-title">About</h6>
                                            {coffee.content}
                                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            {/* <a href="#" className="btn btn-outline-info" onClick={() => console.log(coffee.ingredients.includes(coffeeClass), coffee.ingredients, coffeeClass)}>Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListGroup