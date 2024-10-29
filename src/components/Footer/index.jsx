

const Footer = () => {
  return (
    <footer className="bg-[#ffff] py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        {/* <p className="mb-2">Your Company Name</p> */}
        <p>&copy; {new Date().getFullYear()} Dicky Ardiar Kurniawan</p> 
      </div>
    </footer>
  );
};

export default Footer;