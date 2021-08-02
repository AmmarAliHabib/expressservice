import React from 'react'
import './FormBooking.css'

function FormBooking() {
    return (
        <div>
            <div className="container">
                <div className="book">
                    <div className="description">
                        <h1><strong>Book</strong> your Service</h1>
                        <p>
                            Express Service has your back for all the leaks you’re experiencing. Our services vary from fixes to new fittings, cleaning and other things that come under the expertise of a plumber. Given that the professional is booked for your preferred time frame, the price is calculated on the basis of working hours.
                        </p>

                        <ul>
                            <li>Super reliable service</li>
                            <li>Doorstep repair within 45 mins</li>
                            <li>Protection Against Damage </li>
                            <li>30 days post-service quarantee</li>
                        </ul>
                    </div>
                    <div className="form">
                        <form>
                            <div className="inpbox">
                                Full Name:
                                <span className="flaticon-user"></span>

                                <input type="text" placeholder="Enter Full Name" required />
                            </div>

                            <div className="inpbox">
                                Email:
                                <span className="flaticon-email"></span>
                                <input type="email" placeholder="Enter Email ID" required />
                            </div>

                            <div className="inpbox">
                                Mobile:
                                <span className="flaticon-location"></span>
                                <input type="text" placeholder="Enter Contact no" required />
                            </div>

                            <div className="inpbox">
                                Address:
                                <span className="address"></span>
                                <input type="text" placeholder="Enter Location" required/>
                            </div>

                            <div className="inpbox">
                                Choose Date:
                                <span className="flaticon-calendar"></span>
                                <input type="date" placeholder="Booking Date" />
                            </div>




                            <div className="inpbox full">
                                Time Slot:
                                <span className="flaticon-slot"></span>
                                <select id="timeslot" name="timeslot">
                                    <option value="">&nbsp; &nbsp;Select Time</option>
                                    <option value="t1">&nbsp; &nbsp;08:00AM-9:30AM</option>
                                    <option value="t2">&nbsp; &nbsp;11:00AM-12:30PM</option>
                                    <option value="t3">&nbsp; &nbsp;01:30PM-03:00PM</option>
                                    <option value="t4">&nbsp; &nbsp;03:30PM-05:00PM</option>
                                </select>
                            </div>






                            <div className="inpbox full">
                                <div className="inrbox">
                                    <span className="flaticon-taxi">Reparing</span>
                                    <input type="radio" name="plan" />
                                    <h2>$50</h2>

                                </div>
                                <div className="inrbox">
                                    <span className="flaticon-taxi">Installation</span>
                                    <input type="radio" name="plan" />
                                    <h2>$120</h2>

                                </div>
                                <div className="inrbox">
                                    <span className="flaticon-taxi">cleaning</span>
                                    <input type="radio" name="plan" />
                                    <h2>$180</h2>

                                </div>
                                <div className="inrbox">
                                    <span className="flaticon-taxi">Servicing</span>
                                    <input type="radio" name="plan" />
                                    <h2>$120</h2>

                                </div>
                                </div>

                                <div className="inpbox">
                                    Description:
                                    <span className="address"></span>
                                    <input type="text" placeholder="Describe your problem" required/>
                                </div>

                            
                            <button className="subt">Submit</button>
                            <button className="rst">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBooking;
