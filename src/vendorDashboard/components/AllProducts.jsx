import React, { useState, useEffect } from "react";
import { API_URL } from "../data/ApiPath";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const productsHandler = async (e) => {
    const firmId = localStorage.getItem("firmId");
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductsData = await response.json();
      setProducts(newProductsData.products);
      console.log(newProductsData.products);
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  };

  useEffect(() => {
    productsHandler();
    console.log("useEffect");
  }, []);

  const deleteProductById = async(productId)=>{
    try {
            const response = await fetch(`${API_URL}/product/${productId}`,{
                method: 'DELETE'
            })
        if(response.ok){
            setProducts(products.filter(product =>product._id !== productId));
            confirm("are you sure, you want to delete?")
            alert("Product deleted Successfully")
        }
    } catch (error) {
        console.error('Failed to delete product');
        alert('Failed to delete product')
    }
}

  return (
    <section className="flex flex-col w-full h-full items-center">
      {!products ? (
        <p className="text-center font-bold text-2xl py-5">No Products Added</p>
      ) : (
        <table cellPadding={12} className="bg-[#003D58] border-2 text-[#EDAE49] border-[#00798C] w-4/5 mt-5 table">
          <thead className="border border-[#00798C]">
            <tr className="">
              <th className="border-e border-[#00798C]">Image</th>
              <th className="border-e border-[#00798C]">Product Name</th>
              <th className="border-e border-[#00798C]">Price</th>
              <th className="border-e border-[#00798C]">Delete</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {products.map((item) => {
              return (
                <>
                  <tr key={item._id} className="border border-[#00798C]">
                  <td className="border-e border-[#00798C]">
                        <img
                          src={`${API_URL}/uploads/${item.image}`}
                          alt={item.productName}
                          width={90}
                        />
                    </td>
                    <td className="border-e border-[#00798C]">{item.productName}</td>
                    <td className="border-e border-[#00798C]">{item.price} Rs/-</td>
                    <td className="border-e border-[#00798C]">
                      <button onClick={()=>deleteProductById(item._id)} className="border border-[#D1495B] px-2 py-1 rounded-md text-red-500 ">Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default AllProducts;
