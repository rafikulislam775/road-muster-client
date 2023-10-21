import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CarDetails = () => {
  const { id } = useParams();
  const data = useLoaderData(null);
  const [dataFound, setDataFound] = useState({});
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  console.log(dataFound);
  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);
  useEffect(() => {
    const newData = data?.find((item) => item._id === id);
    setDataFound(newData);
    setLoading(false);
  }, [id, data]);
  const { img, shortDescription, name } = dataFound;

  console.log(dataFound);
  const handleAddCart = () => {
    const isDuplicate = cart?.find((item) => item._id === dataFound._id);
    if (isDuplicate) {
      swal({
        title: "Already added!",
        text: "No duplicates allowed!",
        icon: "error",
        button: "Ok!",
      });
    } else {
      const updatedCart = [...cart, dataFound];
      setCart(updatedCart);
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      fetch(
        "https://road-muster-server-5w2kuaxlh-islam-rafikuls-projects.vercel.app/myCarts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataFound),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            swal(
              "congratulation!",
              "successfully added Your Products!",
              "success"
            );
          }
        });
    }
  };
  return (
    <div className="">
      <div className="flex justify-center items-center p-24">
        {loading ? (
          <span className="loading loading-spinner text-accent"></span>
        ) : (
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">
                  {name} <div className="badge badge-secondary">NEW</div>
                </h1>

                <p className="py-6">{shortDescription}</p>
                <button onClick={handleAddCart} className="btn btn-secondary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
