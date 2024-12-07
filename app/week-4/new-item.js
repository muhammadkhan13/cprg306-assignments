'use client'

import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment= (quantity) => {
        if (quantity <= 20) {
            setQuantity(quantity + 1)
        }
    };

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