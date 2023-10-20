import Tilt from "react-parallax-tilt";
const Carts = ({ cart }) => {
  const { img, name, rating, price } = cart;
  const scale = 1.1;
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-56 w-full" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{rating}</p>
            <div className="card-actions justify-end">
              <div className="btn btn-sm btn-outline"> ${price}</div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Carts;
