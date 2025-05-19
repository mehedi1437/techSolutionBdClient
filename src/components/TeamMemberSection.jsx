import image1 from "../assets/images/image1.png";
import img4 from "../assets/images/img4.jpeg";
import img3 from "../assets/images/img3.png";
const TeamMemberSection = () => {
  const teamMembers = [
    {
      name: "Answar Uddin",
      role: "Founder & CEO",
      image: image1,
    },
    {
      name: "Minhaj Ahammed",
      role: "Web Designer",
      image: img4,
    },
    {
      name: "Md Abdullah Al Fahim",
      role: "Web Developer",
      image: img3,
    },
  ];
  return (
    <div>
      <div className="mx-20 my-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-[#00A3F7]">TEAM MEMBERS</p>
          <p className="text-4xl font-bold text-center">
            Professional Stuffs Ready to Help Your Business
          </p>
          <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
        </div>

        {/* Members Grid */}
        <div className="flex lg:flex-row flex-col items-center justify-around">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col h-[350px] bg-[#EAF9FF]  w-[300px] rounded my-6 shadow-md"
            >
              <div className="h-[200px] shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[200px] w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-10">
                <p className="text-2xl text-[#00A3F7] font-bold">
                  {member.name}
                </p>
                <p className="text-slate-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSection;
