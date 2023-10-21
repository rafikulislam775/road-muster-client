import { useLoaderData } from "react-router-dom";
import Carts from "./Carts";
import { useState } from "react";
const MyCarts = () => {
  const cartsData = useLoaderData();
  const [carts, setCarts] = useState(cartsData);
  // console.log(cartsData);

  //
  return (
    <div className="py-36 container m-auto">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {carts?.map((cart) => (
          <Carts
            key={cart._id}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
          ></Carts>
        ))}
      </div>
    </div>
  );
};

export default MyCarts;
