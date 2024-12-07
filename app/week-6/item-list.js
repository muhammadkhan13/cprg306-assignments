'use client'

import { useState } from "react";
import { Item } from "./item";
import items from "./items.json";

export function ItemList() {
    //Initialized sorting variable
    const [sortBy, setSortBy] = useState("name");

    //Used sort function in js with the comparison arrow function to compare between two items on either their category or name
    //Added ... prefix to items because code was not working without it. I don't know if it was taught in WebDev but I learned it through my experience with React Native in Mobile App Dev
    //From my understanding it "combines" the current array into the new one and is used to create copies of lists to perform actions on that copy
    const sortedItems = [...items].sort((item1, item2) => {
        if (sortBy === "name") {
            return item1.name.localeCompare(item2.name);
        } else if (sortBy === "category") {
            return item1.category.localeCompare(item2.category);
        }
        return 0; 
        //This return 0 is to make sure that if the above conditions are not fulfilled and the positions of the two compared items don't need to be changed then the program defaults to this and ensures that no unintended sorting occurs
    });

    //Using compacted forms of boolean statements as shown in class I styled the buttons to show different behavior depending on whether or not they are currently selected
    //Program then uses map function to display all sorted items with each object in sortedItems displayed as an Item element
    return(
        <div>
            <Button onClick = {() => setSortBy("name")} style = {{backgroundColor: sortBy === "name" ? "green" : "white"}}>Sort By Name</Button>
            <Button onClick = {() => setSortBy("category")} style = {{backgroundColor: sortBy === "category" ? "green" : "white"}}>Sort By Category</Button>
            <ul>{sortedItems.map(item => (<Item name={item.name} quantity={item.quantity} category={item.category}/>))}</ul>
        </div>
    );
};