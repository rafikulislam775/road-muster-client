import { useLoaderData } from "react-router-dom";
import Carts from "./Carts";
const MyCarts = () => {
  const cartsData = useLoaderData();

  console.log(cartsData);

  //
  return (
    <div className="py-36 container m-auto">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cartsData?.map((cart) => (
          <Carts key={cart._id} cart={cart}></Carts>
        ))}
      </div>
    </div>
  );
};

export default MyCarts;
