'use client'

import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1); //Initializing the state variable for quantity

    //Programmed increment function as an arrow function that takes quantity as input and raises its value if less than/equal to 20
    const increment= (quantity) => {
        if (quantity <= 20) {
            setQuantity(quantity + 1)
        }
    };

    //Programmed decrement function as an arrow function that reduces value of quantity if it is greater than one
    const decrement = (quantity) => {
        if (quantity >= 1) {
            setQuantity(quantity - 1)
        }
    };

    return(
        <div>
            <label for="quantity">Quantity: {quantity}</label>
            <Button onClick = {() => increment(quantity) } >Increment</Button>
            <Button onClick = {() => decrement(quantity) } >Decrement</Button>
        </div>
    );
}