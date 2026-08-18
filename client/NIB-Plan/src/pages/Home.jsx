//import React from 'react'
import {motion} from "motion/react";
import { NavLink } from "react-router-dom";
//import bg_image from "../assets/bg_image1.jpg";
import bg_image2 from "../assets/bg_image2.jpg";
import {skills} from "../assets/assets.js";
import { experience } from "../assets/assets.js";

const Home = () => {
  return (

    <div className = "flex flex-col ">

      <div   style={{
          backgroundImage: `url(${bg_image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh", // full screen height
        }} >
           <motion.section
            intial={{opacity: 0, x : -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once:true}}>,/</motion.section>

              <div className = "flex  flex-col pt-40 p-3">
                    <p className = "text-4xl font-bold text-white p-5">
                    Your Partner in <br/>
                    Infrastrcture Solutions
                  </p>

                    <p className = "text-lg text-white p-4">
                      Providing expert consulting services <br/>
                      in Civil and Structural Engineering
                    </p>

                    <div className = "flex gap-5 p-3">
                      <NavLink to="/about" className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Learn More
                    </NavLink>

                    <NavLink to="/projects" className="bg-white w-40 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded">
                      Our Projects
                    </NavLink>
                    </div>
              </div>
      </div>


      <div className = "bg-gray-100">

        <div className = "flex flex-col items-center justify-center p-10">
           <h1 className = "text-2xl font-bold text-blue-900">Welcome to NIB-Plan Consult Ltd</h1>

           <p className="text-gray-600 p-4">
            NIB-Plan Consult Ltd is a foremost Local Consulting firm founded by Tanzania Professional Engineers, registered with<br/>
            the Engineers Registration Board (ERB) with  on 8th April 2008 with registration No.110, to practice structural <br/>
            Civil Engineering Consulting Firm.
           </p>

           <p className="text-gray-600 p-4">
            We are Consulting Engineers,Planners and Project Managers offering professsional consulting engineering services<br/>
            to the public and private sectors in the fields of civil and structural engineering,specialized in Highways, <br/>
            Structures,Urban and Regional infrastructure Development, Water Supply,Water Resources Development and Management, <br/>
            Traffic and Transportation, post and preventive measure audit and, Socio-Economic and Enviromental Impact Assessment
            </p>
        </div>

        <div className = "grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center p-3 pr-25 pl-25 pb-10">


          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col border border-white bg-white rounded-xl items-center justify-center p-2
            transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              <div className = "flex flex-col gap-4 items-center justify-center p-2">
                <img src={skill.image} className="h-15 w-20" />
                <h3 className="text-xl font-bold text-blue-900">{skill.title}</h3>
              </div>

              <hr className = "w-full p-2 " />
              <p className="text-gray-600 text-center">{skill.description}</p>
            </div>
          ))}

        </div>

        <div className = "flex flex-col bg-gray-200 items-center justify-center p-5">

              <h1 className="text-2xl font-bold text-blue-900 p-3">About NIB-Plan Consult Ltd</h1>



               <div className = "grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
                    {experience.map((exp, index) => (
                    <div key = {index} className = "flex  gap-2 border border-white bg-white rounded  p-4 pr-10 pl-10">
                       <div>
                          <h1 className = "text-4xl font-bold text-blue-900">{exp.years}</h1>
                       </div>
                       <div className = "flex flex-col items-center justify-center ">
                           <p className="font-bold ">{exp.description}</p>
                           <p className = "text-sm text-gray-500">{exp.description2}</p>
                       </div>
                    </div>
                ))}
               </div>

               <NavLink to = "/about" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Learn More About Us
               </NavLink>

        </div>








      </div>

    </div>

   )
}

export default Home