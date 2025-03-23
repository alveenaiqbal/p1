// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Tony Martinez",
//     role: "Marketing Manager",
//     image: "/images/tony.jpg",
//     text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetur turpis, suspendisse.",
//     color: "border-red-500",
//   },
//   {
//     name: "Sophia Armstrong",
//     role: "Marketing Manager",
//     image: "/images/sophia.jpg",
//     text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetur turpis, suspendisse.",
//     color: "border-black",
//   },
//   {
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "/images/cody.jpg",
//     text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetur turpis, suspendisse.",
//     color: "border-red-500",
//   },
// ];

// const TestimonialSlider = () => {
//   return (
//     <div className="max-w-5xl mx-auto py-12 text-center">
//       <h2 className="text-3xl font-bold">What our customers have to say</h2>
//       <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         pagination={{ clickable: true }}
//         className="mt-8"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full" />
//               <p className="text-gray-600 mt-4">{testimonial.text}</p>
//               <div className={`w-12 mx-auto mt-4 border-b-2 ${testimonial.color}`} />
//               <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
//               <p className="text-sm text-gray-500">{testimonial.role}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TestimonialSlider;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import { useSwiper } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Data: Each object is a card
// const testimonials = [
//   {
//     id: 1,
//     name: "Tony Martinez",
//     role: "Marketing Manager",
//     image: "/images/user1.jpg",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     name: "Sophia Armstrong",
//     role: "Product Manager",
//     image: "/images/user2.jpg",
//     text: "Suspendisse potenti. Vivamus sagittis lacus vel augue.",
//   },
//   {
//     id: 3,
//     name: "Cody Lambert",
//     role: "UX Designer",
//     image: "/images/user3.jpg",
//     text: "Praesent commodo cursus magna, vel scelerisque nisl.",
//   },
//   {
//     id: 4,
//     name: "Emma Watson",
//     role: "Project Lead",
//     image: "/images/user4.jpg",
//     text: "Aenean lacinia bibendum nulla sed consectetur.",
//   },
//   {
//     id: 5,
//     name: "John Doe",
//     role: "Engineer",
//     image: "/images/user5.jpg",
//     text: "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",
//   },
//   {
//     id: 6,
//     name: "Alice Green",
//     role: "QA Engineer",
//     image: "/images/user6.jpg",
//     text: "Curabitur blandit tempus porttitor. Etiam porta sem malesuada.",
//   },
//   {
//     id: 7,
//     name: "Lucas Smith",
//     role: "Software Developer",
//     image: "/images/user7.jpg",
//     text: "Fusce dapibus, tellus ac cursus commodo.",
//   },
//   {
//     id: 8,
//     name: "Olivia Brown",
//     role: "Product Designer",
//     image: "/images/user8.jpg",
//     text: "Vivamus sagittis lacus vel augue laoreet rutrum.",
//   },
//   {
//     id: 9,
//     name: "Michael Blue",
//     role: "Data Scientist",
//     image: "/images/user9.jpg",
//     text: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
//   },
// ];

// // Custom Navigation Component
// const SlideNavigation = ({ swiper }) => (
//   <div className="flex justify-center gap-4 mt-8">
//     <button
//       onClick={() => swiper.slideTo(0)}
//       className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//     >
//       Section 1
//     </button>
//     <button
//       onClick={() => swiper.slideTo(1)}
//       className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//     >
//       Section 2
//     </button>
//     <button
//       onClick={() => swiper.slideTo(2)}
//       className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//     >
//       Section 3
//     </button>
//   </div>
// );

// const TestimonialSlider = () => {
//   const swiper = useSwiper();

//   // Grouping testimonials into chunks of 3
//   const groupedTestimonials = [];
//   for (let i = 0; i < testimonials.length; i += 3) {
//     groupedTestimonials.push(testimonials.slice(i, i + 3));
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-12 text-center">
//       <h2 className="text-3xl font-bold">What our customers have to say</h2>
//       <p className="text-gray-500 mt-2">See feedback from our clients.</p>

//       {/* Swiper Slider */}
//       <Swiper
//         modules={[Pagination, Navigation]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         className="mt-8"
//       >
//         {groupedTestimonials.map((group, index) => (
//           <SwiperSlide key={index}>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {group.map((testimonial) => (
//                 <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-20 h-20 mx-auto rounded-full"
//                   />
//                   <p className="text-gray-600 mt-4">{testimonial.text}</p>
//                   <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation */}
//       <SlideNavigation swiper={swiper} />
//     </div>
//   );
// };

// export default TestimonialSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Data: Each object is a card
const testimonials = [
  {
    id: 1,
    name: "Tony Martinez",
    role: "Marketing Manager",
    image: "https://github.com/themewagon/simple/blob/main/images/face2.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 2,
    name: "Sophia Armstrong",
    role: "Product Manager",
    image: "https://github.com/themewagon/simple/blob/main/images/face3.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 3,
    name: "Cody Lambert",
    role: "UX Designer",
    image: "https://github.com/themewagon/simple/blob/main/images/face20.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Project Lead",
    image: "https://github.com/themewagon/simple/blob/main/images/face15.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Engineer",
    image: "https://github.com/themewagon/simple/blob/main/images/face16.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 6,
    name: "Alice Green",
    role: "QA Engineer",
    image: "https://github.com/themewagon/simple/blob/main/images/face1.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 7,
    name: "Lucas Smith",
    role: "Software Developer",
    image: "https://github.com/themewagon/simple/blob/main/images/face2.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 8,
    name: "Olivia Brown",
    role: "Product Designer",
    image: "https://github.com/themewagon/simple/blob/main/images/face3.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 9,
    name: "Cody Lambert",
    role: "UX Designer",
    image: "https://github.com/themewagon/simple/blob/main/images/face20.jpg?raw=true",
    text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  
//   {
//     id: 9,
//     name: "Michael Blue",
//     role: "Marketing Manager",
//     image: "https://github.com/themewagon/simple/blob/main/images/face20.jpg?raw=true",
//     text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
//   },
];

const TestimonialSlider = () => {
  // Grouping testimonials into chunks of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <div className="max-w-6xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold">What our customers have to say</h2>
      <p className="text-gray-500 mt-2">See feedback from our clients.</p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true  }}
        className="mt-8"
      >
        {groupedTestimonials.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {group.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 mx-auto rounded-full"
                  />
                  <p className="text-gray-600 mt-4">{testimonial.text}</p>
                  <br/><div className="w-12 h-1 mx-auto mt-2 bg-red-500"></div>
                  <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     id: 1,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     id: 4,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     id: 5,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     id: 6,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/6.jpg",
//   },
//   {
//     id: 7,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/women/7.jpg",
//   },
//   {
//     id: 8,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/8.jpg",
//   },
//   {
//     id: 9,
//     name: "Cody Lambert",
//     role: "Marketing Manager",
//     image: "https://randomuser.me/api/portraits/men/9.jpg",
//   },
// ];

// const TestimonialSlider = () => {
//   return (
//     <div className="max-w-6xl mx-auto py-12 text-center">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         className="mt-8"
//       >
//         {[0, 3, 6].map((startIndex) => (
//           <SwiperSlide key={startIndex}>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {testimonials.slice(startIndex, startIndex + 3).map((testimonial) => (
//                 <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 mx-auto rounded-full"
//                   />
//                   <p className="text-gray-600 mt-4 text-sm">
//                     Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egestas
//                     consectetur turpis, suspendisse.
//                   </p>
//                   <div className="w-12 h-1 mx-auto mt-2 bg-red-500"></div>
//                   <h3 className="font-bold text-black mt-2">{testimonial.name}</h3>
//                   <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TestimonialSlider;
