import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-950 px-5 py-12 text-blue-100 sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-white">NIB-Plan Consult Ltd</h2>
        <p className="mt-4 leading-relaxed">Engineering, planning and project-management support for infrastructure projects.</p>
      </div>
      <div>
        <h3 className="font-bold text-white">Contact us</h3>
        <address className="mt-4 space-y-2 not-italic leading-relaxed">
          <p>Plot No. 487, Block Mikocheni II<br />Kambarage Road, Dar es Salaam</p>
          <a className="block hover:text-white hover:underline" href="mailto:info@nibplan.co.tz">info@nibplan.co.tz</a>
          <p>P.O. Box 34773, Dar es Salaam, Tanzania</p>
        </address>
      </div>
      <div>
        <h3 className="font-bold text-white">Quick links</h3>
        <nav className="mt-4 flex flex-col gap-2">
          <NavLink to="/about" className="hover:text-white hover:underline">About us</NavLink>
          <NavLink to="/services" className="hover:text-white hover:underline">Our services</NavLink>
          <NavLink to="/projects" className="hover:text-white hover:underline">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-white hover:underline">Contact</NavLink>
        </nav>
      </div>
      <div>
        <h3 className="font-bold text-white">Follow us</h3>
        <p className="mt-4">Stay connected with NIB-Plan.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#instagram" className="rounded border border-blue-300/50 px-3 py-2 text-sm font-semibold hover:bg-white hover:text-blue-950" aria-label="Instagram">Instagram</a>
          <a href="#twitter" className="rounded border border-blue-300/50 px-3 py-2 text-sm font-semibold hover:bg-white hover:text-blue-950" aria-label="Twitter">Twitter</a>
          <a href="#linkedin" className="rounded border border-blue-300/50 px-3 py-2 text-sm font-semibold hover:bg-white hover:text-blue-950" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-sm text-blue-200">© {new Date().getFullYear()} NIB-Plan Consult Ltd. All rights reserved.</div>
  </footer>
);

export default Footer;
