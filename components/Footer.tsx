import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-300">
      <div className="footer sm:footer-horizontal text-base-content px-5 py-10 max-w-2lg mx-auto">
        <aside>
          <h3 className="font-bold uppercase opacity-50">AFFIRM CONSULTING</h3>
          <p className="text-lg opacity-50 max-w-md">
            Get education on business planning, direct access to planning
            experts and a funding platform that&apos;s helped raise over $5M.
          </p>
          <div>
            <a
              href="#"
              className="btn btn-circle btn-outline btn-lg hover:btn-success"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline btn-lg hover:btn-success mx-3"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline btn-lg hover:btn-success"
            >
              <FaLinkedin />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Solutions</h6>
          <a className="link link-hover">Business Consulting</a>
          <a className="link link-hover">Financial Advisory</a>
          <a className="link link-hover">Business Planning</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a
            href="tel:+8801869966275"
            className="link link-hover flex items-center gap-2"
          >
            <FaPhone className="text-success" /> 01869966275
          </a>
          <a
            href="mailto:ahsanulazim6@gmail.com"
            className="link link-hover flex items-center gap-2"
          >
            <FaEnvelope className="text-success" /> ahsanulazim6@gmail.com
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaLocationDot className="text-success" /> Dhaka, Bangladesh
          </a>
        </nav>
      </div>
      <div className=" max-w-2lg mx-auto px-5">
        <footer className="footer sm:footer-horizontal footer-center text-base-content py-5 border-t border-black/20">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by{" "}
              <a
                href="https://facebook.com/ahsanulazimplabon"
                className="link link-success link-hover"
              >
                Ahsanul Azim Plabon
              </a>
            </p>
          </aside>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
