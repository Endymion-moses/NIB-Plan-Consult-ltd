import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { TABS, projects, countByStatus } from "../services/projectServices.js";
import bgImage from "../assets/bg_image3.png";
import ScrollReveal from "../components/ScrollReveal.jsx";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "All";
  const [expandedProject, setExpandedProject] = useState(null);
  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.status === activeTab);
  const getTabCount = (tab) => tab === "All" ? projects.length : countByStatus(projects, tab);

  return (
    <main className="overflow-x-hidden">
      <section className="flex min-h-[58vh] flex-col items-center justify-end bg-cover bg-center px-5 pb-12 sm:px-8" style={{ backgroundImage: `url(${bgImage})` }}>
        <ScrollReveal direction="left" className="w-full max-w-5xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Our portfolio</p><h1 className="mt-3 text-4xl font-bold text-white sm:text-6xl">Projects that connect communities</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-white sm:text-xl">Explore selected engineering assignments across transport, structures and water infrastructure.</p></ScrollReveal>
        <ScrollReveal direction="right" className="mt-8 flex w-full max-w-4xl gap-2 overflow-x-auto px-1 pb-1">
          {TABS.map((tab) => { const isActive = activeTab === tab; return <button key={tab} type="button" onClick={() => setSearchParams(tab === "All" ? {} : { tab })} className={`min-w-32 rounded-full border px-5 py-2 text-sm font-semibold whitespace-nowrap transition ${isActive ? "border-blue-900 bg-blue-900 text-white" : "border-white/40 bg-white/90 text-slate-700 hover:bg-white"}`}>{tab} ({getTabCount(tab)})</button>; })}
        </ScrollReveal>
      </section>

      <section className="bg-gray-100 px-5 py-14 sm:px-8"><div className="mx-auto max-w-6xl"><ScrollReveal direction="left"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Selected work</p><h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">{activeTab === "All" ? "Explore our project experience" : `${activeTab} projects`}</h2><p className="mt-3 max-w-3xl leading-relaxed text-gray-600">Each project reflects our commitment to well-planned infrastructure, careful technical delivery and client-focused collaboration.</p></ScrollReveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">{filteredProjects.length === 0 ? <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">No {activeTab.toLowerCase()} projects found.</div> : filteredProjects.map((project, index) => { const projectId = `${project.name}-${project.status}-${index}`; const isExpanded = expandedProject === projectId; return <ScrollReveal key={projectId} direction={index % 2 ? "right" : "left"} className="h-full"><article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={project.image} alt={project.name} className="h-52 w-full object-cover" /><div className="flex flex-1 flex-col p-6"><span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">{project.status}</span><h3 className="mt-4 text-xl font-bold text-blue-900">{project.name}</h3><dl className="mt-5 space-y-3 text-sm"><div><dt className="font-bold text-gray-800">Client</dt><dd className="mt-1 text-gray-600">{project.client}</dd></div><div><dt className="font-bold text-gray-800">Period</dt><dd className="mt-1 text-gray-600">{project.date}</dd></div><div><dt className="font-bold text-gray-800">Scope of services</dt><dd className="mt-1 leading-relaxed text-gray-600">{project.service}</dd></div></dl><button type="button" onClick={() => setExpandedProject(isExpanded ? null : projectId)} aria-expanded={isExpanded} className="mt-6 w-fit rounded border border-blue-900 px-4 py-2 text-sm font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white">{isExpanded ? "Show less" : "Read more"}</button>{isExpanded && <div className="mt-4 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 text-sm leading-relaxed text-gray-700"><p className="font-bold text-blue-900">Project overview</p><p className="mt-2">{project.details}</p></div>}</div></article></ScrollReveal>; })}</div>
      </div></section>

      <section className="bg-white px-5 py-14 text-center sm:px-8"><ScrollReveal direction="right" className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Have a project in mind?</h2><p className="mt-4 leading-relaxed text-gray-600">Our team is ready to discuss the engineering, planning and delivery support your project needs.</p><NavLink to="/contact" className="mt-7 inline-block rounded bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-700">Start a Conversation</NavLink></ScrollReveal></section>
    </main>
  );
};

export default Projects;
