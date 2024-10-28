

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffff] py-4">
      <div className="container mx-auto text-center">
        {/* <p className="mb-2">Your Company Name</p> */}
        <p>&copy; {currentYear}  Dicky Ardiar kurniawan</p>
      </div>
    </footer>
  );
};

export default Footer;