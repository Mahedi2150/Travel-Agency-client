import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Orderform from '../Orderform/Orderform';
// import axios from 'axios';
import "./PlaceDetails.css"
const PlaceDetails = () => {
    const { placeId } = useParams();
    const [places, setPlace] = useState([])
    useEffect(() => {
        fetch(`https://fathomless-eyrie-64424.herokuapp.com/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])





    return (

        <div className="container px-1">
            <div className="row gx-5 mt-5">
                <div className="col">
                    <div className="  ">

                        <div className="d-flex justify-content-center">
                            <div className="card " style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="">
                                        <img src={places?.img} className="img-fluid rounded-start w-100" alt="..." />
                                    </div>
                                    <div className="">
                                        <div className="card-body">
                                            <h5 className="card-title">{places?.name}</h5>

                                            <p>Cost: $ {places?.price}</p>
                                            <p className="card-text"> {places?.Description}</p>
                                            <Link to="/home"><button className="btn btn-primary">Back</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="">

                        <img src="https://freepngimg.com/thumb/travel/30772-9-travel-transparent-image.png" width="250px" height="150px" alt="" />
                        <h2 className="fw-bold text-success mb-5 border-bottom border-success">Booking Now</h2>

                        {/*                         <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <input defaultValue="" placeholder="Address" {...register("address")} />
                            <input defaultValue="" placeholder="Phone number" {...register("phone")} />
                            {errors.email && <span className="error">This field is required</span>}

                            <input type="submit" className="btn-success btn-outline-none text-uppercase fw-bold" />
                        </form> */}
                        <Orderform></Orderform>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default PlaceDetails;