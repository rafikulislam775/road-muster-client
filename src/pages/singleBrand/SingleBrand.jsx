import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandCars from "./BrandCars";

const SingleBrand = () => {
  const [data, setData] = useState(null);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    fetch("http://localhost:4000/addProducts")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setData(data));
  }, []);
  console.log(data);
  const specificData = data?.filter((data) => data?.category === category);
  console.log(specificData);
  return (
    <div>
      <h1>this single brand{data?.length} </h1>
      <div>
        <div>
          {specificData?.map((specificData) => (
            <BrandCars
              key={specificData._id}
              specificData={specificData}
            ></BrandCars>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
