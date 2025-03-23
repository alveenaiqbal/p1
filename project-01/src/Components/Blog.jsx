// const Blog = () => {
//   return (
//     <div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
//       <div>
//         <h1 className="font-medium block text-3xl text-left">
//           We Offer a Full Range<br/> of Digital Marketing Services!
//         </h1>
//         {/* <p>
//         Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
//         consectetuer turpis, suspendisse. */}
//         {/* <p className="font-weight-medium text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer
//         <br />
//         Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
//         consectetuer
//       </p> */}
//         <p className="mt-4 text-gray-600 text-lg text-left">
//           Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
//           consectetuer turpis, suspendisse.
//         </p>
//         <br />
//         <p className=" font-medium mt-4 text-gray-600 text-lg text-left">
//           Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
//           consectetuer
//         </p>
//       </div>
//       <div>
//         <img src="https://github.com/themewagon/simple/blob/main/images/Group1.png?raw=true" alt="p2" className="max-w-full h-auto" />
//       </div>
//       </div>
      




      
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
//         <div>
//         <img src="https://github.com/themewagon/simple/blob/main/images/Group2.png?raw=true" alt="p8" className="max-w-full h-auto " />
//       </div>
//       {/* <div className="text-right"> */}
//          <div className="w-1/2 pl-12 text-left"> 
//         <h2 className="text-3xl font-semibold leading-snug text-gray-900">
//           Leading Digital Agency for Business Solution.
//         </h2>
//         <p className="mt-4 text-gray-600 text-lg text-left ">
//           Power-packed with impressive features and well-optimized, this
//           template is designed to provide the best performance in all
//           circumstances.
//         </p>

//         <p className="font-medium mt-4 text-gray-600 text-lg text-left">
//           Its smart features make it a powerful stand-alone website building
//           tool.
//         </p>

//         {/* Readmore Button */}
//         <a
//           href="/"
//           className="mt-6 inline-block px-6 py-2  bg-sky-500 text-white rounded-lg hover:bg-white hover:text-sky-500 border border-sky-500 transition"
//         >
//           Readmore
//         </a>
//       </div>
//       </div>
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-semibold text-gray-900">Our case studies</h2>
//         <p className="text-gray-500 mt-2">
//           Lorem ipsum dolor sit amet, tincidunt vestibulum.
//         </p>
//       </div>



//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Card 1: Online Marketing */}
//         <div className="text-center">
//           <div className="bg-black flex items-center justify-center h-64">
//             <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group95.svg" alt="Online Marketing" className="h-40" />
//           </div>
//           <h3 className="mt-6 text-xl font-semibold">Online Marketing</h3>
//           <p className="text-gray-500 mt-2">Seo, Marketing</p>
          
//         </div>
//         <div className="text-center">
//           <div className="bg-yellow-400 flex items-center justify-center h-64">
//             <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group108.svg" alt="Web Development" className="h-40" />
//           </div>
//           <h3 className="mt-6 text-xl font-semibold">Web Development</h3>
//           <p className="text-gray-500 mt-2">Developing, Designing</p>
//         </div>
//         <div className="text-center">
//           <div className="bg-purple-300 flex items-center justify-center h-64">
//             <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group126.svg" alt="Web Designing" className="h-40" />
//           </div>
//           <h3 className="mt-6 text-xl font-semibold">Web Designing</h3>
//           <p className="text-gray-500 mt-2">Designing, Developing</p>
//         </div>
//         <div className="text-center">
//           <div className="bg-blue-600 text-white flex flex-col items-center justify-center h-64 p-8">
//           <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group115.svg"/>
//           </div><h3 className="mt-6 text-xl font-semibold">Software Development</h3>
         
//           <p className="text-gray-500 mt-2">Developing, Designing</p>
//           </div>

       
         
//         </div>
      
        
//      </div>
//   );
// };

// export default Blog;
import React from "react";

const services = [
  {
    title: "Online Marketing",
    description: "Seo, Marketing",
    bgColor: "bg-black",
    imageSrc:
      "https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group95.svg",
  },
  {
    title: "Web Development",
    description: "Developing, Designing",
    bgColor: "bg-yellow-400",
    imageSrc:
      "https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group108.svg",
  },
  {
    title: "Web Designing",
    description: "Designing, Developing",
    bgColor: "bg-purple-300",
    imageSrc:
      "https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group126.svg",
  },
  {
    title: "Software Development",
    description: "Developing, Designing",
    bgColor: "bg-blue-600",
    imageSrc:
      "https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group115.svg",
  },
];

const ServiceCard = ({ title, description, bgColor, imageSrc }) => {
  return (
    <div className="relative group text-center">
      {/* Card */}
      <div className={`flex items-center justify-center h-64 ${bgColor} relative overflow-hidden rounded-lg`}>
        <img src={imageSrc} alt={title} className="h-40 transition-transform duration-300 group-hover:scale-105" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <p className="text-white font-semibold mb-2">Know more about {title}</p>
          <button className="bg-white text-black px-4 py-2 rounded-md">Read More</button>
        </div>
      </div>
      {/* Title & Description */}
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-medium text-3xl text-left">
            We Offer a Full Range<br /> of Digital Marketing Services!
          </h1>
          <p className="mt-4 text-gray-600 text-lg text-left">
            Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
          </p>
          <p className="font-medium mt-4 text-gray-600 text-lg text-left">
            Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer.
          </p>
        </div>
        <div>
          <img
            src="https://github.com/themewagon/simple/blob/main/images/Group1.png?raw=true"
            alt="p2"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <img
            src="https://github.com/themewagon/simple/blob/main/images/Group2.png?raw=true"
            alt="p8"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-12 text-left">
          <h2 className="text-3xl font-semibold leading-snug text-gray-900">
            Leading Digital Agency for Business Solution.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.
          </p>
          <p className="font-medium mt-4 text-gray-600 text-lg">
            Its smart features make it a powerful stand-alone website building tool.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-white hover:text-sky-500 border border-sky-500 transition"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-semibold text-gray-900">Our Case Studies</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
