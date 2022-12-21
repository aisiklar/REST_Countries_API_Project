import "./dayNightText.styles.scss";

const DayNightText = (props) => {
  const displayMode = props.displayMode;

  return (
    <>
      {displayMode === "dark-mode" ? (
        <div className="dayNightText">Light Mode</div>
      ) : (
        <div className="dayNightText light">Dark Mode</div>
      )}
    </>
  );
};
export default DayNightText;
