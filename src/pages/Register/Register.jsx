import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
const Register = () => {
  const scale = 1.1;
  const { createUsers } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, email, password);
    //regular expression for password validation
    if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
      swal(
        "Oops",
        "Password must be at least 6 characters long and contain at least one uppercase letter.",
        "error"
      );
      return;
    }

    createUsers(email, password,name)
      //   .then((res) => console.log(res?.user))
      .then(() => swal("Welcome!", "You are SignUp successfully!", "success"))

      //   .catch((error) => console.error(error?.message));
      .catch(() =>
        swal("Oops", "Something went wrong ! please try again", "error")
      );
  };
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/kc2DVkh/car-registe-bg.jpg)",
      }}
    >
      <section className="flex min-h-screen py-36 justify-center items-center  ">
        {/* only 2 thing to come out like glass "bg-white  bg-opacity-10" */}
        <div className="w-full bg-white  bg-opacity-10 max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
          <form onSubmit={handleRegister} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {/* <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div> */}
            <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
              <button
                type="submit"
                className="w-full text-white bg-red-900 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign Up to your account
              </button>
            </Tilt>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an account ?{" "}
              <NavLink
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Log in
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
