const Footer = () => {
  return (
    <footer className="bg-white py-4 w-full">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        {/* Uncomment the line below if you want to display your company name */}
        {/* <p className="mb-2 text-sm md:text-base">Your Company Name</p> */}
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Dicky Ardiar Kurniawan</p>
      </div>
    </footer>
  );
};

export default Footer;