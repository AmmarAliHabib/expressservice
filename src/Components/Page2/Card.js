import React, {useState} from 'react'
import Data from './data'
import './tab.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Card = () => {

    const [items, setItems] = useState(Data);
    
    const filterItem = (categItem) => {
        const updatedItems = Data.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Check out these service provider</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItem('plumber')}>Plumber</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Electrician')}>Electrician</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Painter')}>Painter</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Carpentor')}>Carpentor</button>
                    <button className="btn btn-warning" onClick={() => setItems(Data)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                    
                                        <div className="item1 col-8 col-md-12 col-lg-3 col-xl-4  my-3 ">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-2 col-md-2 col-lg-4 img-div ">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            <Link to="/book">
                                                                <button className="btn btn-primary">Book Now</button>
                                                            </Link>
                                                        </div>
                                                        <p>*Prices may vary on selected date.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card