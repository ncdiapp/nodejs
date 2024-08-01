'use client';

import { useState } from 'react';
import Image from "next/image";
import { useAppContext } from '../contexts/AppContext';


interface ProductDetailProps {
    product: any;
}

const ProductAddToCartButton: React.FC<ProductDetailProps> = ({ product }) => {
    const { AddOneItemToShoppingCart } = useAppContext().eCommerceModel;
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        AddOneItemToShoppingCart(product, quantity); // Change quantity as needed
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, parseInt(e.target.value, 10) || 1);
        setQuantity(value);
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));

    return (

        <div className="flex items-center space-x-2">
            <button
                onClick={decrementQuantity}
                className="px-2 py-1 bg-[#54AC5B] text-white rounded"
                style={{ backgroundColor: '#54AC5B' }}
            >
                -
            </button>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border rounded"
                style={{ height: "36px" }}
                min="1"
            />
            <button
                onClick={incrementQuantity}
                className="px-2 py-1 bg-[#54AC5B] text-white rounded"
                style={{ backgroundColor: '#54AC5B' }}
            >
                +
            </button>
            <div className='w-4'></div>
            <button
                onClick={handleAddToCart}
                className="px-4 py-2 text-white rounded-full w-full"
                style={{ backgroundColor: '#54AC5B', width: "240px" }}
            >
                Add to Cart
            </button>
        </div>
    );
}



export default ProductAddToCartButton;