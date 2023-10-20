import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import BrandCard from "../../pages/BrandCards/BrandCard";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className=" mt-10">
        <h1 className="text-white text-6xl my-7 text-center uppercase">
          Our Exclusive Car Collections
        </h1>
        <h1 className=" md:text-3xl text-center ">
          Explore the extraordinary diversity of our collection,
          <br /> featuring six renowned car brands. From timeless elegance to
          cutting-edge innovation, <br /> we have a car to match every style and
          preference.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {data?.map((data) => (
          <BrandCard key={data.id} data={data}></BrandCard>
        ))}
      </div>
      <Contact></Contact>
      <About></About>
    </div>
  );
};

export default Home;
