
import img1 from '../assets/rectbg.png'
import img2 from '../assets/rectfr.png'

const GetToKnowUs = () => {
    return (
      <section className="bg-gray-100 py-20 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src={img1}
                alt="Woman with laptop"
                className="rounded-lg z-10 relative w-50 mb-20"
              />
              <img
                src={img2}
                alt="Person at desk"
                className="absolute bottom-[-160px] ml-40 rounded-lg z-20 w-1/3 mb-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
                    <h2 className="text-blue-900 text-3xl font-semibold mb-2 text-right">Get to Know Us</h2>
                    <h3 className="text-3xl font-bold mb-4 text-right">Enhance your abilities, learn with us anywhere, anytime</h3>
                    <p className="text-gray-600 text-xl mb-6 text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-end">
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Expert trainers</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Lifetime access</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Great results</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Online learning</button>
                    </div>
                </div>
        </div>
      </section>
    );
  }
  
  export default GetToKnowUs;