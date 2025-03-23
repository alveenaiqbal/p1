const About = () => {
  return (
    <section id="about" className="bg-white-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-medium font-bold">How does it works</h2>
        <p className="mt-4 text-gray-600 font-normal text-base">
          One theme that serves as an easy-to-use operational toolkit <br />
          that meets customer's needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group12.svg" alt="p1" className="max-w-full h-auto" />
            <h5
              className="text-xl text-left font-family: Poppins, sans-serif text-2xl 
              text-black-600"
            >
              speed <br />
              optimisation.
            </h5>
            <p className="mt-4 text-gray-600 text-lg text-left">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse
            </p><br />
            <a
              href="/"
              className="text-gray-400 font-bold font-medium hover:text-red-500 text-left block text-sm font-light"
            >
              Readmore
            </a>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group7.svg" alt="p2" className="max-w-full h-auto" />
            <h5
              className="text-xl text-left font-family: Poppins, sans-serif text-2xl 
             text-black-600"
            >
              SEO and <br />
              Backlinks.
            </h5>
            <p className="mt-4 text-gray-600 text-lg text-left">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse
            </p>
            <br />
            <a
              href="/"
              className="text-gray-400 font-bold font-medium hover:text-red-500 text-left block text-sm font-light"
            >
              Readmore
            </a>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group5.svg" alt="p3" className="max-w-full h-auto" />
            <h5
              className="text-xl text-left font-family: Poppins, sans-serif text-2xl 
             text-black-600"
            >
              Content
              <br />
              Marketing.
            </h5>
            <p className="mt-4 text-gray-600 text-lg text-left">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse
            </p><br />
            <a
              href="/"
              className="text-gray-400 font-bold font-medium hover:text-red-500 text-left block text-sm font-light"
            >
              Readmore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
