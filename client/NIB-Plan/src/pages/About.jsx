import { NavLink } from "react-router-dom";
import bgImage from "../assets/bg_image2.jpg";
import { target } from "../assets/assets.js";
import ScrollReveal from "../components/ScrollReveal.jsx";

const values = [
  ["Technical excellence", "Sound engineering judgement and practical, well-considered solutions guide every assignment."],
  ["Collaborative delivery", "We work closely with clients, communities and project partners throughout the project lifecycle."],
  ["Quality and accountability", "Clear coordination, diligent supervision and attention to detail help protect project outcomes."],
];

const About = () => (
  <main className="overflow-x-hidden">
    <section className="flex min-h-[55vh] items-end bg-cover bg-center px-5 pb-14 sm:px-10 md:px-20" style={{ backgroundImage: `url(${bgImage})` }}>
      <ScrollReveal direction="left"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">NIB-Plan Consult Ltd</p><h1 className="mt-3 text-4xl font-bold text-white sm:text-6xl">Engineering progress<br />with purpose</h1></ScrollReveal>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <ScrollReveal direction="right"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Who we are</p><h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">A Tanzanian consulting partner for vital infrastructure</h2><p className="mt-5 max-w-4xl leading-relaxed text-gray-600">NIB-Plan Consult Ltd is a local consulting firm founded by Tanzania Professional Engineers. Registered with the Engineers Registration Board (ERB) on 8 April 2008 under registration No. 110, the firm provides civil and structural engineering consulting services.</p><p className="mt-4 max-w-4xl leading-relaxed text-gray-600">Our work brings together engineering, planning and project management to help clients develop infrastructure that serves people, supports growth and responds to local conditions.</p></ScrollReveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {target.map((item, index) => <ScrollReveal key={item.title} direction={index ? "right" : "left"}><article className="h-full rounded-xl border border-gray-200 bg-gray-50 p-6"><div className="flex items-center gap-4">{item.image && <img src={item.image} alt="" className="h-14 w-14 object-contain" />}<h3 className="text-2xl font-bold text-blue-900">{item.title}</h3></div><p className="mt-5 whitespace-pre-line leading-relaxed text-gray-600">{item.description}</p></article></ScrollReveal>)}
      </div>
    </section>

    <section className="bg-gray-100 px-5 py-14 sm:px-8"><div className="mx-auto max-w-6xl"><ScrollReveal direction="left"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our commitment</p><h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">Built on experience, guided by values</h2></ScrollReveal><div className="mt-8 grid gap-5 md:grid-cols-3">{values.map(([title, description], index) => <ScrollReveal key={title} direction={index % 2 ? "right" : "left"}><article className="h-full rounded-xl bg-white p-6 shadow-sm"><span className="text-3xl font-bold text-blue-200">0{index + 1}</span><h3 className="mt-4 text-xl font-bold text-blue-900">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{description}</p></article></ScrollReveal>)}</div></div></section>

    <section className="bg-blue-950 px-5 py-14 text-center sm:px-8"><ScrollReveal direction="right" className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s create infrastructure that lasts</h2><p className="mt-4 leading-relaxed text-blue-100">Discover how our engineering, planning and project-management expertise can support your next assignment.</p><NavLink to="/contact" className="mt-7 inline-block rounded bg-white px-6 py-3 font-bold text-blue-900 hover:bg-blue-100">Talk to Our Team</NavLink></ScrollReveal></section>
  </main>
);

export default About;
