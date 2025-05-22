import useDashboardControl from "../hooks/useDashboardControl";

const TeamMemberSection = () => {
  const { teamMembers } = useDashboardControl();

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center my-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col h-[350px] bg-[#EAF9FF]  w-[300px] rounded my-6 shadow-md hover:scale-110 hover:bg-white hover:shadow-md transition-transform duration-300"
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
