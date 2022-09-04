import "../../styles/servtypes.css";

const ServTypes = ({ title, text, icon, color, coloricon }) => {
  return (
    <div className="service-wraper" style={{ background: color }}>
      <div className="icon-wrap" style={{ background: coloricon }}>
        {icon}
      </div>
      <p className="service-title">{title}</p>
      <p className="service-text">{text}</p>
    </div>
  );
};
export default ServTypes;
