const BrandCars = ({ specificData }) => {
  const { category, img, name, rating, shortDescription } = specificData;
  console.log(category);
  return (
    <div>
      <h1> you have only this items{category}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default BrandCars;
