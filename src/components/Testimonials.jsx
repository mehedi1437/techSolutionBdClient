import img4 from '../assets/images/img4.jpeg'
const Testimonials = () => {
    const testimonials = [
  {
    name: "Minhaj Ahammed",
    title: "Web Designer",
    message:
      "The Information Technology (IT) field encompasses a wide range of professions and career opportunities. IT professionals work with technology systems and software to design, develop, manage, and maintain various aspects of computing and information systems.",
    image: img4
  },
  {
    name: "Minhaj Ahammed",
    title: "Web Designer",
    message:
      "The Information Technology (IT) field encompasses a wide range of professions and career opportunities. IT professionals work with technology systems and software to design, develop, manage, and maintain various aspects of computing and information systems.",
    image: img4
  },
  {
    name: "Minhaj Ahammed",
    title: "Web Designer",
    message:
      "The Information Technology (IT) field encompasses a wide range of professions and career opportunities. IT professionals work with technology systems and software to design, develop, manage, and maintain various aspects of computing and information systems.",
    image: img4
  }
];
    return (
        <div>
            <div className="mx-20 my-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[#00A3F7]">TESTIMONIAL</p>
        <p className="text-4xl font-bold text-center">
          What Our Clients Say About Our Digital Services
        </p>
        <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
      </div>

      {/* Cards */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 mt-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#EAF9FF] h-[250px] w-[350px] p-4 flex flex-col justify-around rounded hover:scale-110 hover:bg-white hover:shadow-md transition-transform duration-300"
          >
            <div className="flex gap-4">
              <div className="h-[50px] w-[50px] border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-[50px] w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-bold text-[#00A3F7]">{t.name}</p>
                <p>{t.title}</p>
              </div>
            </div>
            <hr />
            <div>
              <p className="text-xs text-center">{t.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Testimonials;