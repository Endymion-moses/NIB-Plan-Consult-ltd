import { NavLink } from "react-router-dom";
import bgImage from "../assets/bg_image3.png";
import { services } from "../assets/assets.js";
import ScrollReveal from "../components/ScrollReveal.jsx";

const deliveryStages = ["Project definition and feasibility", "Planning, design and documentation", "Procurement and construction support", "Supervision, monitoring and evaluation"];

const Services = () => (
  <main className="overflow-x-hidden">
    <section className="flex min-h-[55vh] items-end bg-cover bg-center px-5 pb-14 sm:px-10 md:px-20" style={{ backgroundImage: `url(${bgImage})` }}>
      <ScrollReveal direction="left"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">What we do</p><h1 className="mt-3 text-4xl font-bold text-white sm:text-6xl">Engineering support<br />at every stage</h1><p className="mt-4 max-w-2xl text-lg text-white sm:text-xl">Consulting, planning and project management services for infrastructure projects.</p></ScrollReveal>
    </section>

    <section className="bg-gray-100 px-5 py-14 sm:px-8"><div className="mx-auto max-w-6xl"><ScrollReveal direction="right" className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our capabilities</p><h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">Technical services tailored to your project</h2><p className="mt-4 leading-relaxed text-gray-600">Our multidisciplinary team combines technical knowledge with practical project experience to support clients from the earliest concept through to construction and completion.</p></ScrollReveal><div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ScrollReveal key={`${service.title}-${index}`} direction={index % 2 ? "right" : "left"} className="h-full"><article className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={service.image} alt="" className="h-16 w-16 object-contain" /><h3 className="mt-5 text-lg font-bold text-blue-900">{service.title}</h3><p className="mt-3 whitespace-pre-line leading-relaxed text-gray-600">{service.description}</p></article></ScrollReveal>)}</div></div></section>

    <section className="bg-white px-5 py-14 sm:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center"><ScrollReveal direction="left"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our approach</p><h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">Clear guidance at each project milestone</h2><p className="mt-5 leading-relaxed text-gray-600">We align our input to the scope, scale and needs of each assignment. This helps clients make informed decisions, manage delivery risks and maintain focus on quality.</p></ScrollReveal><div className="grid gap-4 sm:grid-cols-2">{deliveryStages.map((stage, index) => <ScrollReveal key={stage} direction={index % 2 ? "right" : "left"}><div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><span className="text-sm font-bold text-blue-600">STAGE 0{index + 1}</span><p className="mt-2 font-semibold text-blue-950">{stage}</p></div></ScrollReveal>)}</div></div></section>

    <section className="bg-blue-950 px-5 py-14 text-center sm:px-8"><ScrollReveal direction="right" className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to discuss your project?</h2><p className="mt-4 leading-relaxed text-blue-100">Contact us to explore the right engineering and project-delivery support for your needs.</p><NavLink to="/contact" className="mt-7 inline-block rounded bg-white px-6 py-3 font-bold text-blue-900 hover:bg-blue-100">Get in Touch</NavLink></ScrollReveal></section>
  </main>
);

export default Services;
