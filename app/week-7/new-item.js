'use client'

import { useState } from "react";

export function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const idLength = 18;
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

    //I don't remember if we were taught this in class, and I could not find this in the course material, but one of the requirements was to generate a random id
    //I found this method of generating a random string off Stack Overflow (https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)
    //Based on the other objects in item.json I assumed that the id would need to be 18 characters long, so I initialized that variable earlier with the state variables
    //From my understanding, this function creates a set of characters in one string as all letters of the alphabet and digits 0-9
    //It then creates a new string by retrieving a random character from that character set and concactenating it onto the generated id
    //This repeats using a for loop that terminates once the cycle has repeated 18 times
    //While I have not programmed a check to make sure the generated id is unique, the odds of an identical id being created are so low that I skipped that step
    const generateID = (length) => {
        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomID = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            randomID += charSet[randomIndex];
        }
        return randomID;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: generateID(idLength),
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);

        //Replaced alert with handleAddItem function using onAddItem prop
        onAddItem(item);

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
                <Button onClick = { increment(quantity) } >Increment</Button>
                <Button onClick = { decrement(quantity) } >Decrement</Button>
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