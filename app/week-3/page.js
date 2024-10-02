import { Item } from "./item";
import { ItemList } from "./item-list";

export default function Page() {
    return (
        <div className="bg-slate-600">
            <h3 className="text-yellow-600 text-2xl font-bold mx-2 pt-1">
                Shopping list
            </h3>
            <ItemList/>
        </div>
    );
}