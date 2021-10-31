import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddPlaces.css"
const AddPlaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://fathomless-eyrie-64424.herokuapp.com/place", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added");
                    reset()
                }
            })
    };
    return (
        <div className="add-places">
            <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="pt-5 border-bottom border-3 border-success"> Add a Place</h2>
                <input {...register("name", { required: true })} placeholder="Name" />

                <textarea {...register("Description")} placeholder="Description" />

                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="Img url" />
                <input type="submit" className="btn-success text-uppercase " />
            </form>
        </div>
    );
};

export default AddPlaces;