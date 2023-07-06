/* eslint-disable react/prop-types */
const Title = ({ title }) => {
  return (
    <>
      <div className="title">
        <h2> {title}</h2>
      </div>
      <div className="title-underline"></div>
    </>
  );
};
export default Title;
