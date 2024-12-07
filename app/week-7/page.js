'use client';

import { useState } from "react";
import { Item } from "./item";
import { ItemList } from "./item-list";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(...items, newItem);
    };

    return (
        <div className="bg-slate-600">
            <h3 className="text-yellow-600 text-2xl font-bold mx-2 pt-1">
                Shopping list
            </h3>
            <NewItem  onAddItem={ handleAddItem } />
            <ItemList items={ items }/>
        </div>
    );
}