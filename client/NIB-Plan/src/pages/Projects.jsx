//import React from 'react'
import { useSearchParams } from "react-router-dom";
import {TABS, projects, countByStatus} from "../services/projectServices.js";
import bg_image3 from '../assets/bg_image3.png'


const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();

   const activeTab = searchParams.get("tab") || "All";

    const filteredprojects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.status === activeTab);

    /*
    const getTabCount = (tab) => {
    if (tab === "All") {
      return projects.length;
    }}*/

      const getTabCount = (tab) => {
    if (tab === "All") {
      return projects.length;
    }

    return countByStatus(projects, tab);
  };

  return (
    <div>
                           <div
                            className="relative flex flex-col items-center justify-start w-full min-h-[30vh] sm:min-h-[50vh] md:min-h-[50vh] px-6 sm:px-12 md:px-20 py-10"
                            style={{
                             backgroundImage: `url(${bg_image3})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",

                           }} >
                             <div className='pt-25 items-center justify-center pl-10 '>
                                <h1 className='text-white font-bold text-7xl pl-6'>Our Projects  </h1>
                               <p className='text-white pl-6 text-2xl font-bold p-3'>Ongoing and Completed Projects.</p>

                             </div>

                              <div className="flex gap-2 overflow-x-auto pb-1">
                            {TABS.map((tab) => {
                              const isActive = activeTab === tab;

                              return (
                                <button
                                  key={tab}
                                  type="button"
                                  onClick={() => setSearchParams({ tab })}
                                  className={`rounded-xl w-45 border px-5 py-2 text-sm font-semibold transition whitespace-nowrap ${
                                    isActive
                                      ? "border-blue-900 bg-blue-900 text-white"
                                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white"
                                  }`}
                                >
                                  {tab === "All" ? tab : `${tab} (${getTabCount(tab)})`}
                                </button>
                              );
                            })}
                          </div>
                          </div>


                          <div className="bg-gray-100 p-10">
                          <div className="   flex flex-col gap-5">

                           { filteredprojects.length === 0 ? (
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">
                              No {activeTab.toLowerCase()} projects found.
                            </div>
                           ) : (
                                filteredprojects.map((project, index) => (
                                 <div key ={index}
                                 className="flex gap-3 justify-between p-4 rounded-xl  bg-white">
                                     <div>
                                         <h1>{project.name}</h1>
                                         <h2>{project.client}</h2>
                                         <p>{project.date}</p>
                                         <p>{project.services}</p>
                                    </div>

                                    <img src={project.image} alt="" className="h-50"/>

                                 </div>

                           )))

                          }
                          </div>
                          </div>


   </div>



  )
}

export default Projects;