import { NavLink } from "react-router-dom";
import bgImage from "../assets/bg_image2.jpg";
import { experience, skills } from "../assets/assets.js";
import ScrollReveal from "../components/ScrollReveal.jsx";
import Footer from "../components/Footer.jsx";

const projectApproach = [
  { step: "01", title: "Understand", description: "We begin with site context, project objectives, stakeholder needs and the technical information required for sound decisions." },
  { step: "02", title: "Plan & Design", description: "Our team develops practical engineering and planning solutions that consider performance, safety, value and long-term use." },
  { step: "03", title: "Deliver", description: "Through construction supervision, monitoring and technical advice, we help keep work aligned with the approved scope and quality expectations." },
];

const expertiseAreas = [
  "Roads, highways and transport infrastructure",
  "Civil and structural engineering design",
  "Urban and regional infrastructure development",
  "Water supply and water-resources development",
  "Project management, monitoring and evaluation",
  "Technical audits and environmental assessments",
];

const Home = () => (
  <main className="overflow-x-hidden">
    <section className="min-h-[75vh] bg-cover bg-center sm:min-h-[80vh]" style={{ backgroundImage: `url(${bgImage})` }}>
      <ScrollReveal direction="left" className="flex max-w-2xl flex-col px-5 pt-32 sm:px-10 sm:pt-40 md:px-16">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Your Partner in<br />Infrastructure Solutions</h1>
        <p className="mt-5 text-base text-white sm:text-lg">Providing expert consulting services in Civil and Structural Engineering</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
          <NavLink to="/about" className="rounded bg-blue-500 px-5 py-3 text-center font-bold text-white hover:bg-blue-700">Learn More</NavLink>
          <NavLink to="/projects" className="rounded bg-white px-5 py-3 text-center font-bold text-blue-600 hover:bg-blue-100">Our Projects</NavLink>
        </div>
      </ScrollReveal>
    </section>

    <section className="bg-gray-100">
      <ScrollReveal direction="right" className="mx-auto flex max-w-6xl flex-col items-center px-5 py-12 sm:px-8">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">Welcome to NIB-Plan Consult Ltd</h2>
        <p className="mt-5 text-center leading-relaxed text-gray-600">NIB-Plan Consult Ltd is a foremost local consulting firm founded by Tanzania Professional Engineers, registered with the Engineers Registration Board (ERB) on 8th April 2008 with registration No.110, to practice structural civil engineering consulting.</p>
        <p className="mt-4 text-center leading-relaxed text-gray-600">We are consulting engineers, planners and project managers offering professional services to the public and private sectors in civil and structural engineering, including highways, infrastructure development, water resources, transportation and environmental impact assessment.</p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 pb-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <ScrollReveal key={skill.title} direction={index % 2 ? "right" : "left"} className="h-full">
            <article className="flex h-full flex-col items-center rounded-xl border border-white bg-white p-4 text-center transition hover:-translate-y-0.5 hover:shadow-xl">
              <img src={skill.image} alt="" className="h-15 w-20 object-contain" />
              <h3 className="mt-4 text-xl font-bold text-blue-900">{skill.title}</h3>
              <hr className="my-4 w-full border-gray-200" />
              <p className="text-gray-600">{skill.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="bg-white px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <ScrollReveal direction="left">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">How we work</p>
          <h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">Practical support from concept to completion</h2>
          <p className="mt-5 leading-relaxed text-gray-600">Infrastructure projects work best when planning, design and delivery are connected. NIB-Plan brings these disciplines together to help clients move confidently from early studies through implementation and project close-out.</p>
          <p className="mt-4 leading-relaxed text-gray-600">Whether the assignment requires a feasibility study, detailed design, independent technical advice or on-site supervision, our focus is clear communication, responsible coordination and solutions suited to the project context.</p>
          <NavLink to="/services" className="mt-7 inline-block rounded bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-700">Explore Our Services</NavLink>
        </ScrollReveal>
        <div className="space-y-4">
          {projectApproach.map((item, index) => (
            <ScrollReveal key={item.step} direction={index % 2 ? "right" : "left"}>
              <article className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
                <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                <div><h3 className="text-xl font-bold text-blue-900">{item.title}</h3><p className="mt-2 leading-relaxed text-gray-600">{item.description}</p></div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-blue-950 px-5 py-14 sm:px-8">
      <ScrollReveal direction="right" className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Areas of expertise</p>
        <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl">Engineering services for essential infrastructure</h2>
        <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-blue-100">We support public and private-sector clients with multidisciplinary consulting services that respond to community needs and project requirements.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => <div key={area} className="rounded-lg border border-white/15 bg-white/10 px-5 py-4 text-center font-medium text-white">{area}</div>)}
        </div>
      </ScrollReveal>
    </section>

    <section className="flex flex-col items-center bg-gray-200 px-5 py-10 sm:px-8">
      <ScrollReveal direction="left"><h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">About NIB-Plan Consult Ltd</h2></ScrollReveal>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-5 py-6 md:grid-cols-2">
        {experience.map((item, index) => (
          <ScrollReveal key={item.years} direction={index % 2 ? "right" : "left"}>
            <div className="flex gap-4 rounded border border-white bg-white p-5 sm:px-8">
              <p className="text-4xl font-bold text-blue-900">{item.years}</p>
              <div><p className="font-bold">{item.description}</p><p className="text-sm text-gray-500">{item.description2}</p></div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <NavLink to="/about" className="rounded bg-blue-900 px-5 py-3 font-bold text-white hover:bg-blue-700">Learn More About Us</NavLink>
    </section>

    <section className="bg-white px-5 py-14 text-center sm:px-8">
      <ScrollReveal direction="left" className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Let&apos;s discuss your next project</h2>
        <p className="mt-4 leading-relaxed text-gray-600">Talk to our team about your infrastructure, planning or engineering requirements and learn how NIB-Plan can support your project.</p>
        <NavLink to="/contact" className="mt-7 inline-block rounded bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">Contact Our Team</NavLink>
      </ScrollReveal>
    </section>
    <Footer />
  </main>
);

export default Home;
