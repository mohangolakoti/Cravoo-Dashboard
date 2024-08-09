import React, { useState } from "react";
import {API_URL} from '../../data/ApiPath'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);

  const categoryChangeHandler = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const imageHandler = (e)=>{
    const selectedImage = e.target.files[0];
    setFile(selectedImage);
  }

  const regionChangeHandler = (e) => {
    const value = e.target.value;
    if (region.includes(value)) {
      setRegion(region.filter((item) => item !== value));
    } else {
      setRegion([...region, value]);
    }
  };

  const firmSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) {
        console.log("Token not found");
        toast.warning("Please login")
        /* alert("Please login"); */
      }
      const formData = new FormData();
      formData.append("firmName", firmName);
      formData.append("area", area);
      formData.append("offer", offer);
      formData.append('image', file)
      category.forEach((value) => {
        formData.append("category", value);
      });
      region.forEach((value) => {
        formData.append("region", value);
      });

      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method:'POST',
        headers:{
          'token':`${loginToken}`
        },
        body:formData
      })
      const data = await response.json()
      if(response.ok){
        console.log(data)
        const firmId = data.firmId;
        const firmName = data.vendorFirmName
        localStorage.setItem('firmId',firmId)
        localStorage.setItem('firmName',firmName)
        /* alert("Firm added Successfully") */
        toast.info("Firm added Successfully")
        setFirmName("")
        setArea("")
        setCategory([])
        setRegion([])
        setOffer("")
        setFile(null)
        window.location.reload()
      }else if(data.message==="Vendor can have only one Firm"){
        //alert("Firm already exists")
        toast.warning("Firm already exists")
      }else{
        //alert("Failed to add Firm")
        toast.error("Failed to add Firm")
      }
    
    } catch (error) {
      console.log(error)
      //alert("Failed to add firm")
      toast.error("Failed to add Firm")
    }
  };
  return (
    <section className=" flex flex-col items-center w-full h-full">
      <h2 className="text-black font-bold text-xl py-2">Add Firm</h2>
      <ToastContainer />
      <form
        onSubmit={firmSubmitHandler}
        className="justify-center bg-[#003D58] rounded-xl text-white px-10 py-2 text-lg leading-10 w-1/2"
      >
        <label htmlFor="firmName">FirmName:</label>
        <br />
        <input
          type="text"
          name="firmName"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
          className="border text-black px-2 w-full rounded-md"
          placeholder="enter firmname"
        />
        <br />
        <label htmlFor="username">Area:</label>
        <br />
        <input
          type="text"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border text-black px-2 w-full rounded-md"
          placeholder="enter area"
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
        <label htmlFor="veg" className="">Veg</label>
        <input
          type="checkbox"
          value="non-veg"
          checked={category.includes("non-veg")}
          onChange={categoryChangeHandler}
          className="mx-2 ml-10 accent-[#D1495B]"
        />
        <label htmlFor="non-veg">Non-Veg</label>
        <br />
        <label htmlFor="region">Region:</label>
        <br />
        <input
          type="checkbox"
          value="south-indian"
          checked={region.includes("south-indian")}
          onChange={regionChangeHandler}
          className="mx-2 accent-[#D1495B]"
        />
        <label htmlFor="south-indian">South Indian</label>
        <input
          type="checkbox"
          value="north-indian"
          checked={region.includes("north-indian")}
          onChange={regionChangeHandler}
          className="mx-2 ml-6 accent-[#D1495B]"
        />
        <label htmlFor="north-indian">North Indian</label>
        <input
          type="checkbox"
          value="chineese"
          checked={region.includes("chineese")}
          onChange={regionChangeHandler}
          className="ml-6 mx-2 accent-[#D1495B]"
        />
        <label htmlFor="chineese">Chineese</label>
        <input
          type="checkbox"
          value="bakery"
          checked={region.includes("bakery")}
          onChange={regionChangeHandler}
          className="mx-2 ml-6 accent-[#D1495B]"
        />
        <label htmlFor="bakery">Bakery</label>
        <br />
        <label htmlFor="offer">Offer:</label>
        <br />
        <input
          type="text"
          name="offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          className="border text-black px-2 w-full rounded-md"
          placeholder="enter offer"
        />
        <br />
        <label>Firm Image:</label>
        <br />
        <input type="file" className="rounded-md border-[#D1495B]" onChange={imageHandler}/>
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

export default AddFirm;
