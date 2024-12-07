'use client'

import { useState } from "react";

export function NewItem() {
    //Initialized state variables with initial values in accordance with assignment instructions
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    //Hard-coded a variable that will take the initial states as shown above to be retrieved later when state is reset during form submission
    //I don't know/remember if there is a better way to record or retrieve the initial state of a set of state variables
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

    //Event handler function programmed as arrow function
    //It takes in the form submission as the event parameter
    const handleSubmit = (event) => {
        //Prevents default behavior of form submission that gets rid of all fields/inputs to allow for reset to initial state and recording of input values
        event.preventDefault();

        //Item object created using the name, quantity, and category values contained within form fields at the time of submission
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);

        alert(`Name: ${ name }, Quantity: ${ quantity }, Category: ${ category }`);

        //Once item object is created, the information has been stored, and the fields in the form are all reset using the initial state object created earlier
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