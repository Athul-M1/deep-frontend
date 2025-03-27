import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react';
import logo from "/assets/logo.png";

const Contact = () => {
  return (
    <section className="bg-black text-white py-8" id='contact-us'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-5">
        <div className="border border-gray-400 rounded-lg p-4 w-full md:w-1/3 text-center">
          <h3 className="text-blue-400 font-semibold font-oswald">CONNECT WITH US</h3>
          <p className="flex items-center justify-center gap-2 mt-2 font-oswald">
            <Phone size={16} className="text-yellow-500" /> +91 9567843340
          </p>
          <p className="flex items-center justify-center gap-2 mt-1 font-oswald">
            <Mail size={16} className="text-yellow-500" /> info@deepnetsoft.com
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 w-full md:w-1/3 text-center flex flex-col items-center">
          <img src={logo} alt="Deepnetsoft Logo" className="w-12 h-12 mb-2" />
          <h2 className="text-xl font-bold text-blue-400 font-oswald">
            DEEP <span className="text-white">NET</span> <span className="text-secondary">SOFT</span>
          </h2>
          <div className="flex justify-center gap-4 mt-2 text-gray-400">
            <a href="#" className="hover:text-white"><FacebookIcon/></a>
            <a href="#" className="hover:text-white"><TwitterIcon/></a>
            <a href="#" className="hover:text-white"><InstagramIcon/></a>
          </div>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 w-full md:w-1/3 text-center">
          <h3 className="text-blue-400 font-semibold font-oswald">FIND US</h3>
          <p className="flex items-center justify-center gap-2 mt-2 font-oswald">
            <MapPin size={16} className="text-yellow-500 " /> First floor, Geo Infopark, Infopark EXPY, Kakkanad
          </p>
        </div>
      </div>
      <footer className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
