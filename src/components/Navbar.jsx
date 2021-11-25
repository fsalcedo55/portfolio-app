import { Link } from "react-router-dom";

const navbar = () => {
  // const appMenuPages = [
  //   {
  //     name: "About",
  //     icon: "👤",
  //   }
  // ]

  return (
    <div className="relative min-h-screen md:flex">
      {/* nav */}
      <nav className="bg-darkGreen w-24 flex justify-between flex-col">
        <div>
          <Link to="/" className="font-extralight">
            <div className="py-2 flex items-center flex-col">
              <p className="text-lightSand text-2xl">👤</p>
              <p className="text-gray text-xs hover:text-lightSand">About</p>
            </div>
          </Link>
          <Link to="/experience" className="font-extralight">
            <div className="py-2 flex items-center flex-col">
              <p className="text-lightSand text-2xl">📁</p>
              <p className="text-gray text-xs hover:text-lightSand">
                Experience
              </p>
            </div>
          </Link>
          <Link to="/work" className="font-extralight">
            <div className="py-2 flex items-center flex-col">
              <p className="text-lightSand text-2xl">👷🏻‍♂️</p>
              <p className="text-gray text-xs hover:text-lightSand">Work</p>
            </div>
          </Link>
          <Link to="/education" className="font-extralight">
            <div className="py-2 flex items-center flex-col">
              <p className="text-lightSand text-2xl">📖</p>
              <p className="text-gray text-xs hover:text-lightSand">
                Education
              </p>
            </div>
          </Link>
          <Link to="/contact" className="font-extralight">
            <div className="py-2 flex items-center flex-col">
              <p className="text-lightSand text-2xl">☏</p>
              <p className="text-gray text-xs hover:text-lightSand">Contact</p>
            </div>
          </Link>
        </div>
        <div>Social Media Menu</div>
      </nav>
    </div>
  );
};
export default navbar;
