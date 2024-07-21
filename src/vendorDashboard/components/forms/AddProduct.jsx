import React,{useState} from "react";
import {API_URL} from '../../data/ApiPath'

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const categoryChangeHandler = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const bestsellerHandler=e=>{
    const value= e.target.value==='true'
    setBestseller(value)
  }

  const imageHandler = (e)=>{
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  }

  const productSubmitHandler= async (e)=>{
    e.preventDefault()
    try {
      const firmId = localStorage.getItem('firmId')
      const loginToken = localStorage.getItem('loginToken')
      if(!loginToken || !firmId){
        console.log("user not authenticated")
      }

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append('image', image)

      category.forEach((value) => {
        formData.append("category", value);
      });
      const response =  await fetch(`${API_URL}/product/add-product/${firmId}`,{
        method:'POST',
        body:formData
      })
      const data = await response.json()
      if(response.ok){
        alert('Product added Successfully')
        setProductName("")
        setPrice("")
        setCategory([])
        setBestseller(false)
        setDescription("")
        setImage(null)
      }
    } catch (error) {
      console.error(data.message);
      alert('Failed to add Product')
    }
  }

  return (
    <section className="flex flex-col items-center w-full h-screen overflow-auto">
      <h2 className="font-bold text-xl py-2">Add Product</h2>
      <form
        onSubmit={productSubmitHandler}
        className="bg-[#003D58] rounded-xl text-white justify-center px-10 py-2 text-lg leading-10 md:w-1/2 w-2/3 max-[500px]:w-[90%]"
      >
        <label htmlFor="username">ProductName:</label>
        <br />
        <input
          type="text"
          value={productName}
          onChange={(e)=>setProductName(e.target.value)}
          className="border text-black border-black px-2 w-full rounded-md"
          placeholder="enter productname"
        />
        <br />
        <label htmlFor="username">Price:</label>
        <br />
        <input
          type="text"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          className="border text-black border-black px-2 w-full rounded-md"
          placeholder="enter price"
        />
        <br />
        <label htmlFor="username">Category:</label>
        <br />
        <input
          type="checkbox"
          value="veg"
          checked={category.includes("veg")}
          onChange={categoryChangeHandler}
          className="mx-2 accent-[#D1495B]"
        />
        <label htmlFor="veg">Veg</label>
        <input
          type="checkbox"
          value="non-veg"
          checked={category.includes("non-veg")}
          onChange={categoryChangeHandler}
          className="mx-2 ml-10 accent-[#D1495B]"
        />
        <label htmlFor="non-veg">Non-Veg</label>
        <br />
        <label htmlFor="bestseller">Bestseller:</label>
        <br />
        <input
          type="radio"
          value="true"
          checked={bestseller===true}
          onChange={bestsellerHandler}
          className="mx-2 accent-[#D1495B]"
        />
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          value="false"
          checked={bestseller===false}
          onChange={bestsellerHandler}
          className="mx-2 ml-10 accent-[#D1495B]"
        />
        <label htmlFor="no" className="">No</label>
        <br />
        <label htmlFor="username">Description:</label>
        <br />
        <input
          type="text"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="border text-black border-black px-2 w-full rounded-md"
          placeholder="enter description"
        />
        <br />
        <label htmlFor="username">Firm Image:</label>
        <br />
        <input type="file" className="rounded-md" onChange={imageHandler} />
        <br />
        <div className="py-2">
          <button type="submit" className="bg-[#00798C] px-4 w-full text-white rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
