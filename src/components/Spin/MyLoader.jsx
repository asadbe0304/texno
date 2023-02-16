import React from "react";
import ContentLoader from "react-content-loader";
import "./style.scss";
const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 400 150"
    backgroundColor="#998f8f"
    foregroundColor="#FFF"
    className="position-fixed d-flex justify-content-start align-items-start w-100 h-100 top-0 loader"
    {...props}
  >
    <rect x="-5" y="-0" rx="0" ry="0" height="35" className="w-100" />
    <rect x="0" y="38" rx="0" className="w-100" height="130" />
  </ContentLoader>
);

export default MyLoader;
