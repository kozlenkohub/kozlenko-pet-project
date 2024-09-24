const HeaderSections = ({ subHeader, mainHeader }) => {
  return (
    <div className="text-center mt-8 mb-4">
      <h3 className="text-gray-600 uppercase font-semibold leading-4">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  );
};

export default HeaderSections;
