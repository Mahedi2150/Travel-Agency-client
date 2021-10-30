import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddPlaces.css"
const AddPlaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("http://localhost:5000/place", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added");
                    reset()
                }
            })
    };
    return (
        <div className="add-places">
            <h2>Please Add a Places</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />

                <textarea {...register("Description")} placeholder="Description" />

                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="Img url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPlaces;