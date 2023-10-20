import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
const Login = () => {
  const scale = 1.1;
  const { loginUser, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      //   .then((res) => console.log(res.user))
      .then(() => {
        navigate(location?.state ? location.state : "/");
        swal("Good job!", "now you are login successfully!", "success");
      })

      //   .then((err) => console.error(err.message));
      .catch(() =>
        swal("Oops", "Something went wrong ! please try again", "error")
      );
  };
  //handle google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        swal("Good job!", "now you are login successfully!", "success");
      })
      .catch(() =>
        swal("Oops", "Something went wrong ! please try again", "error")
      );
  };
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/wrVhFcF/lg-bg.jpg)",
      }}
    >
      <section className="flex min-h-screen py-36  justify-center items-center  ">
        {/* only 2 thing to come out like glass "bg-white  bg-opacity-10" */}
        <div className="w-full bg-white  bg-opacity-10 max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
          <form onSubmit={handleLogin} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
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
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
            </Tilt>
            <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
              <button
                onClick={handleGoogleLogin}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
              >
                <FcGoogle className="inline mr-3 text-lg"></FcGoogle>Login to
                your google account
              </button>
            </Tilt>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <NavLink
                to="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
