import React from 'react'

const Cart = (props) => {

  const { products, decreaseQuantity, removeProduct } = props;

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      <div className="container flex justify-end">
        <div className="group relative rounded-lg bg-white shadow-lg shadow-purple-200 p-4 ">
          <p className='text-3xl font-semibold mb-4 text-right'>Total:- ${props.cost.toFixed(2)}</p>
        </div>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-md p-4">
              <div className="flex justify-center">
                <img src={product.image} alt={product.title} className="h-40 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    className="text-purple-500 font-semibold mr-2"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <p className="text-gray-700 font-semibold">{product.quantity}</p>
                  <button
                    className="text-purple-500 font-semibold ml-2"
                    onClick={() => props.addToCart(product.id, product.title, product.image, product.price, 1)}
                  >
                    +
                  </button>
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md" onClick={() => handleRemoveProduct(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
