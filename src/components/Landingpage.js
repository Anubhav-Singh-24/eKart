import React, { useEffect, useState } from 'react'

const Landingpage = (props) => {

    const { addToCart } = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (id, title, image, price) => {
        addToCart(id, title, image, price, 1);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-purple-500 text-center">Product items</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative rounded-lg bg-white shadow-lg shadow-purple-200 p-4 ">
                            <div className="aspect-square w-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <h3 className="text-sm text-gray-700 text-center">{product.title}</h3>
                                    <p className="text-sm font-medium text-gray-900 text-center">${product.price}</p>
                                </div>
                            </div>
                            <div className="btn my-3 text-center">
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded focus:outline-none hover:bg-purple-600"
                                    onClick={() => handleAddToCart(product.id, product.title, product.image, product.price)}>Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Landingpage
