import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import img from "/";
const teamMembers = [
  {
    name: "Anurag Gautam",
    role: "Founder / Full-Stack Developer",
    description:
      "Anurag brings a vision for innovation, leading the team in creating cutting-edge web solutions and ensuring seamless integration of both front-end and back-end technologies.",
    image: "/images/anurag.jpg",
  },
  {
    name: "Anjali Pundhir",
    role: "Project Manager / UI/UX Designer",
    description:
      "Anjali excels in creating intuitive and visually appealing designs, managing project timelines, and ensuring that the team delivers high-quality, user-centered solutions.",
    image: "/images/anjli.jpg",
  },
];

const Team: React.FC = () => {
  const renderTeamMember = (member: (typeof teamMembers)[0]) => (
    <div
      key={member.name}
      role="listitem"
      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
    >
      <div className="card rounded overflow-hidden shadow-md ">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src={member.image}
              alt={`Display Picture of ${member.name}`}
              role="img"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-center mb-1">{member.name}</h1>
          <p className="text-gray-800 text-sm text-center">{member.role}</p>
          <p className="text-center text-gray-600 text-base pt-3 font-normal">
            {member.description}
          </p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Github" role="img">
                <FaGithub className="text-gray-600" />
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Twitter" role="img">
                <FaTwitter className="text-gray-600" />
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Instagram" role="img">
                <FaInstagram className="text-gray-600" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    // Team section starts here
    <section id="team">
      <div className="team-section mb-16">
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="subtitle text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p>
            <h1 className="title xl:text-4xl text-3xl text-center font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div className="background w-full px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              {teamMembers.map(renderTeamMember)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
