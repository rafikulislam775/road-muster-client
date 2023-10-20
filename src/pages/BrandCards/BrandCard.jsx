// import { useState } from "react";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const BrandCard = ({ data }) => {
  // const [scale, setScale] = useState(1.1);
  const scale = 1.1;
  const { Img, brandName, title, category } = data;
  console.log(category);
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40  ">
            <img className="mx-auto max-w-full" src={Img} />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {brandName}
            </h5>
            <h5 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
          </div>
          <div className="p-6 pt-0">
            <NavLink to={`/singleBrand/${category}`}>
              <button
                className="select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                See More
              </button>
            </NavLink>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
BrandCard.propTypes = {
  data: PropTypes.object,
};

export default BrandCard;
