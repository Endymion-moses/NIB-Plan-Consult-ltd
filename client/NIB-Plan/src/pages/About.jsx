
import bg_image2 from "../assets/bg_image2.jpg";
import { target } from "../assets/assets.js";
import { teamMembers } from "../assets/assets.js";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">

      {/* Hero Banner Section */}
      <div
        className="relative flex items-center justify-start w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] px-6 sm:px-12 md:px-20 py-10"
        style={{
          backgroundImage: `url(${bg_image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "ellipse(100% 100% at 50% 0%)"
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-auto">
          About Us
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-6xl flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 space-y-6">

        {/* Company Title */}
        <div className="w-full text-left">
          <div className="flex flex-wrap gap-2 text-lg sm:text-xl p-1">
            <span className="font-semibold text-gray-800">About</span>
            <span className="text-blue-900 font-bold">NIB-Plan Consult Ltd</span>
          </div>
          <hr className="w-full border-gray-300 mt-2" />
        </div>

        {/* Company Intro */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed w-full">
          NIB-Plan Consult Ltd is a foremost Local Consulting firm founded by Tanzania Professional Engineers, registered
          with the Engineers Registration Board (ERB) on 8th April 2008 with registration No.110, to practice
          structural Civil Engineering Consulting Firm.
        </p>

        {/* Target/Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-4 ">
          {target.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 bg-gray-50 items-start justify-start gap-4 p-5 sm:p-6 rounded-lg shadow-sm
              transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex gap-3 items-center justify-center">
                {item.image && <img src={item.image} alt={item.title} className="h-12 sm:h-16 w-auto object-contain"/>}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who We Are Title */}
        <div className="w-full text-left pt-4">
          <h1 className="text-2xl sm:text-3xl text-blue-900 font-bold mb-2">Who We Are</h1>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Who We Are Paragraph */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed w-full">
          NIB-Plan Consult Ltd is a foremost Local Consulting firm founded by Tanzania Professional Engineers, registered
          with the Engineers Registration Board (ERB) on 8th April 2008 with registration No.110, to practice
          structural Civil Engineering Consulting Firm.
        </p>
      </div>

      {/* Why Choose Us & Team Section */}
      <div className="w-full p-4 bg-gray-50 flex flex-col items-center">
        <div className="w-full max-w-6xl">

          <h1 className="text-2xl sm:text-3xl text-blue-900 font-bold mb-6 text-left">Why Choose Us</h1>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-y border-gray-200 py-6 gap-6 sm:gap-0 bg-white rounded-lg shadow-sm md:bg-transparent md:shadow-none md:rounded-none">
            {/* Experience Metrics */}
            <div className="flex flex-col justify-center px-6 sm:border-r border-gray-200">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-blue-900 text-4xl sm:text-5xl font-bold tracking-tight">13+</span>
                <span className="text-gray-800 text-sm sm:text-base font-semibold">Years of Experience</span>
              </div>
              <p className="text-gray-500 text-xs">Delivering quality engineering solutions since 2008</p>
            </div>

            {/* Project Metrics */}
            <div className="flex flex-col justify-center px-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-blue-900 text-4xl sm:text-5xl font-bold tracking-tight">100+</span>
                <span className="text-gray-800 text-sm sm:text-base font-semibold">Completed Projects</span>
              </div>
              <p className="text-gray-500 text-xs">Successfully executed over 100 diverse projects</p>
            </div>
          </div>

          {/* Team Container */}
          <div className="w-full mt-12 flex flex-col items-center">
            <h1 className="w-full text-2xl sm:text-3xl text-blue-900 font-bold mb-6 text-left">Meet Our Team</h1>

            {/* Team Cards Grid */}
            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden text-center">
                  <div className=" aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-sm sm:text-base font-bold text-blue-900 truncate px-1">{member.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Team Button */}
            <button className="bg-blue-900 text-white font-semibold text-sm px-8 py-3 rounded-md shadow hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
              View All Team
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;
