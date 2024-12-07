'use client'

import { useState } from "react";
import { Item } from "./item";

export function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    //Created itemCopy using the same method of "combining" and array using ... prefix that I used in theweek 6 assignment
    const [itemCopy, setItemCopy] = useState([...items]);

    const sortedItems = [...itemCopy].sort((item1, item2) => {
        if (sortBy === "name") {
            return item1.name.localeCompare(item2.name);
        } else if (sortBy === "category") {
            return item1.category.localeCompare(item2.category);
        }
        return 0;
    });

    return(
        <div>
            <Button onClick = {() => setSortBy("name")} style = {{backgroundColor: sortBy === "name" ? "green" : "white"}}>Sort By Name</Button>
            <Button onClick = {() => setSortBy("category")} style = {{backgroundColor: sortBy === "category" ? "green" : "white"}}>Sort By Category</Button>
            <ul>{sortedItems.map(item => (<Item name={item.name} quantity={item.quantity} category={item.category}/>))}</ul>
        </div>
    );
};