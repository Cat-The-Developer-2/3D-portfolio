import { logoIconsList } from "../Constants/index";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marcquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name} />
          ))}

          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
