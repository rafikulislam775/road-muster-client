import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";

const Carts = ({ cart, carts, setCarts }) => {
  const { img, name, rating, price, _id } = cart;
  const scale = 1.1;
  //added delete function
  const handleDelete = (_id) => {
    console.log(_id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/myCarts/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount >= 0) {
                const remaining = carts?.filter(
                  (newCart) => newCart._id !== _id
                );
                setCarts(remaining);
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

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
            <div className="card-actions flex justify-between items-center ">
              <div className="btn btn-sm btn-outline"> ${price}</div>
              <div>
                {" "}
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-circle bg-red-600"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Carts;
