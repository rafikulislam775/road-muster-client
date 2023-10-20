import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BrandCars = ({ specificData }) => {
  const scale = 1.1;
  const { img, name, rating, price, _id } = specificData;
  // console.log(category);
  return (
    <div>
      <div>
        <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40  ">
              <img className="mx-auto max-w-full" src={img} />
            </div>
            <div className="p-6">
              <div className="flex justify-between">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {name}
                </h5>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <h1 className="text-xl font-semibold">Price : ${price}</h1>
              <h5 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {rating}.............
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
            </div>
            <div className="p-6 pt-0 flex gap-5">
              {/* <NavLink to={`/singleBrand/${category}`}> */}
              <button
                className="select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <Link to={`/details/${_id}`}>Details</Link>
              </button>
              <button
                className="select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Update
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};
BrandCars.propTypes = {
  specificData: PropTypes.object,
};
export default BrandCars;
