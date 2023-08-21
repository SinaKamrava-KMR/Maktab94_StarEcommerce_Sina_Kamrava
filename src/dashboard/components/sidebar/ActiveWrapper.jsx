import styled from "@emotion/styled";
import PropTypes from "prop-types";

ActiveWrapper.propTypes = {
  activeId: PropTypes.string,
};

const Wrapper = styled("div")(({ position }) => ({
  // width:"90%",
  position: "absolute",
  height:"39px",
  top: position,
  left: "10px",
  right: "0",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "#06041cd0",
  borderRadius: ".5rem",
  zIndex: 0,
  transition: "top .2s ease-in",
  "@media (max-width:950px)": {
    top: (position - 3),
    right: "10px",
    
  }
}));

function ActiveWrapper({ activeId }) {
  let position;
  switch (activeId) {
    case "main":
      position = 15;
      break;
    case "orders":
      position = 67;
      break;
    case "products":
      position = 117;
      break;
    case "management":
      position = 170;
      break;
      case "categories":
        position = 221;
        break;
    case "users":
      position = 275;
      break;
    case "addProduct":
      position = 322;
      break;
  }

  return <Wrapper position={position}></Wrapper>;
}

export default ActiveWrapper;
