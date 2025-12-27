import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router";
import Subtitle from "./Subtitle";

const Hero = () => {
  return (
    <div className="bg-base-200 pt-20">
      <div className="grid max-lg:gap-y-10 lg:grid-cols-2 items-center max-w-2lg mx-auto px-5">
        <div>
          <Subtitle>Build Your Plan</Subtitle>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl lg:text-balance font-bold">
            Everything you need to run your online business
          </h1>
          <p className="py-6 lg:text-lg opacity-50">
            Get education on business planning, direct access to planning
            experts and a funding platform that&apos;s helped raise over $500
            million for startups and small businesses world-wide.
          </p>
          <Link to="registration">
            <button className="btn btn-success md:btn-lg">
              Get Started <span className="opacity-50">- For Free</span>
            </button>
          </Link>
          <button className="btn btn-ghost md:btn-lg hover:text-success hover:bg-transparent hover:border-0 hover:shadow-none">
            <FaCirclePlay /> Watch Demo
          </button>
        </div>
        <img
          src="/assets/hero.webp"
          alt="hero"
          className=""
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Hero;
