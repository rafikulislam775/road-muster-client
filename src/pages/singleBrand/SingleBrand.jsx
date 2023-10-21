import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandCars from "./BrandCars";
const SingleBrand = () => {
  const [allData, setData] = useState(null);
  const { category } = useParams();
  // console.log(category);

  useEffect(() => {
    fetch(
      "https://road-muster-server-5w2kuaxlh-islam-rafikuls-projects.vercel.app/addProducts"
    )
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((allData) => setData(allData));
  }, []);
  // console.log(allData);
  const specificData = allData?.filter(
    (allData) => allData?.category === category
  );
  // console.log(specificData);
  return (
    <div className=" ">
      <div>
        <div>
          <div className=" carousel h-screen w-full mt-20 relative ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/GTnfV5b/021-tesla.jpg"
                className="w-full"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/Pw440n9/ferrari-new.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/W3vP5sj/toyota-new.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/wK5r5Hm/BMW-new.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div>
              <h2 className=" absolute top-10 left-40 text-white text-4xl ">
                {" "}
                <span className=" text-8xl">
                  {" "}
                  <span className="text-red-800">O</span>Our{" "}
                </span>
                <br />
                Preview of the Forthcoming <br /> Auto Marvels{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
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
