import { useState, useContext } from "react"
import shopItems from './Data'
import { CartContext } from '../CartContext';


const Details = (props) => {
    // const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useContext(CartContext);
    const [products] = useState(shopItems);
    const index = localStorage.getItem('currentProduct');
    const info = products.find((item) => item.id === Number(index));
    console.log(cartItems)

    const handleAddInCart = (item, quantity) => {

        if (cartItems.some(element => element.item.id === item.id)) {

            cartItems.forEach(element => {

                if (element.item.id === item.id) {
                    const newCartItems = [...cartItems];
                    const index = newCartItems.indexOf(element);
                    newCartItems[index].amount = Number(element.amount) + Number(quantity);
                    setCartItems(newCartItems);
                }

            });

            return;
        }

        const cartItem = {
            item: item,
            amount: quantity
        }
        setCartItems([...cartItems, cartItem]);
    }

    const addToCart = () => {
        const Car = { name, image, price, description }
        setCartItems(curr => [...curr, Car]);
    }
    const { name, image, price, description } = info;
    return (
        <div className="text-white bg-gray-700 bg-opacity-75 rounded-lg m-2 shadow-inner">
            <h2 className="font-bold text-xl text-center mt-2 bg-gray-700 rounded mx-8">{info.name}</h2>

            <div className="flex">
                <div className="w-2/3 p-10">
                    <p className="mt-2 h-auto text-gray-400 text-lg font-bold">{info.description}</p>
                    <p className="mt-2 h-auto text-gray-400 text-lg font-bold">{info.description}</p>
                    <h1 className="text-gray-100 font-bold text-xl mt-4">Price : ${info.price}
                        <button onClick={() => handleAddInCart(info, 1)}
                            className="px-3 py-2 mx-4 bg-gray-800 text-xs font-bold uppercase rounded hover:bg-gray-600">
                            Add to Card
                        </button>
                    </h1>

                </div>
                <img className="h-96 w-96" src={info.image} alt={info.name} />
            </div>
        </div>
    )
}
export default Details