import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const data = useLoaderData(null);
  const [dataFound, setDataFound] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const newData = data?.find((item) => item._id === id);
    setDataFound(newData);
    setLoading(false);
  }, [id, data]);
  const { img, shortDescription, name } = dataFound;
  console.log(dataFound);
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
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
