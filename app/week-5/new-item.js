'use client'

import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const initialState = {
        name: "",
        quantity: 1,
        category: "produce",
    };

    const increment = (quantity) => {
        if (quantity <= 20) {
            setQuantity(quantity + 1)
        };
    };

    const decrement = (quantity) => {
        if (quantity >= 1) {
            setQuantity(quantity - 1)
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);

        alert(`Name: ${ name }, Quantity: ${ quantity }, Category: ${ category }`);

        setName(initialState.name);
        setQuantity(initialState.quantity);
        setCategory(initialState.category);
    };

    return(
        <form onSubmit={ handleSubmit }>
            <div> 
                <label for="name">Name:</label>
                <input type="text" id="name" value={ name } onChange={(event) => setName(event.target.value)} required />
            </div>
            <div>
                <label for="quantity">Quantity: {quantity}</label>
                <Button onClick = {() => increment(quantity) } >Increment</Button>
                <Button onClick = {() => decrement(quantity) } >Decrement</Button>
            </div>
            <div>
                <label for="category">Category:</label>
                <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}