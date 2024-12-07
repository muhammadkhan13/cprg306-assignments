'use client'

import { useState } from "react";
import { Item } from "./item";

export function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
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
            <Button onClick = {() => setSortBy("name")} style = {{backgroundColor: sortBy === "name" ? "lightblue" : "white"}}>Sort By Name</Button>
            <Button onClick = {() => setSortBy("category")} style = {{backgroundColor: sortBy === "category" ? "lightblue" : "white"}}>Sort By Category</Button>
            <ul>{sortedItems.map(item => (<Item name={item.name} quantity={item.quantity} category={item.category}/>))}</ul>
        </div>
    );
};