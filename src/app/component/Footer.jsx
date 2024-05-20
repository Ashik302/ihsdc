const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">About Us</h4>
                    <p className="text-sm leading-relaxed">IHSDC is dedicated to providing quality education and training in the hospitality industry.</p>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm leading-relaxed">123 Main Street<br />City, State ZIP<br />Phone: (123) 456-7890<br />Email: info@ihsdc.com</p>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-sm">Facebook</a>
                        <a href="#" className="text-sm">Twitter</a>
                        <a href="#" className="text-sm">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
