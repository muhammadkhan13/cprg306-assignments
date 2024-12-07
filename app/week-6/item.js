export function Item({ name, quantity, category }) {
    return (
        <div className="text-yellow-600 bg-green-950 p-1 mt-4 w-80">
            <p className="ml-2 text-justify font-bold">Item: {name}</p>
            <p className="ml-2 text-justify font-bold">Amount Needed: {quantity}</p>
            <p className="ml-2 text-justify font-bold">Aisle: {category}</p>
        </div>
    );
}