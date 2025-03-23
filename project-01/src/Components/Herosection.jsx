const Herosection = () => {
  return (
    <section className="bg-gray-50 px-3 py-6 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl text-center font-family: Poppins, sans-serif text-2xl 
         font-bold text-black-600"
        >
          Search engine optimisation & <br />
          Marketing.
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Simple is a simple template with a creative design that solves all
          your marketing and SEO queries.
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          {/* <button className="bg-red-200 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-300 transition">
            Get started
          </button> */}
          <button className="bg-orange-200 text-orange-500 px-6 py-2 rounded-md border border-orange-500 transition duration-300 hover:bg-white hover:text-orange-500">
        Get started
      </button>

          <button className="bg-green-200 text-green-500 px-6 py-2 rounded-md transition duration-300 hover:bg-white hover:text-green-500 hover:border hover:border-green-500">
        Learn more
      </button>
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group171.svg"
            alt="Hero Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
