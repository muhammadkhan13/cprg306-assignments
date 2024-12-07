'use client';

import { useState } from "react";
import { Item } from "./item";
import { ItemList } from "./item-list";
import { MealIdeas } from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems(...items, newItem);
    };

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''));
    }

    return (
        <div className="bg-slate-600">
            <h3 className="text-yellow-600 text-2xl font-bold mx-2 pt-1">
                Shopping list
            </h3>
            <NewItem  onAddItem={ handleAddItem } />
            <ItemList items={ items } onItemSelect={() => handleItemSelect }/>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
}