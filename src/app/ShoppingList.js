'use client';
import React, { useState } from 'react';

export default function ShoppingList({initialShopList }) {
    const [shopList, setShopList] = useState(initialShopList);

    function deleteProduct(index) {
        setShopList(shopList.filter((_, i) => i !== index));
    }

    return (
        <div>
            {shopList.map((product, index) => (
                <div key={index}>
                    <p>{product}</p>
                    <button onClick={() => deleteProduct(index)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}
