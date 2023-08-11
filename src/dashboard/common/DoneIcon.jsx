import { SvgIcon } from "@mui/material";
import PropTypes from "prop-types";

DoneIcon.propTypes = {
  active: PropTypes.bool,
};
function DoneIcon({ active = false }) {
  return (
    <SvgIcon fontSize="large">
      <svg
        className="svg-icon"
        style={{
          width: "1em",
          height: "1em",
          fill: "currentColor",
          overflow: "hidden",
        }}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M354.986667 1024c-58.026667 0-102.4-44.373333-102.4-102.4s44.373333-102.4 102.4-102.4 102.4 44.373333 102.4 102.4-47.786667 102.4-102.4 102.4z m0-170.666667c-37.546667 0-68.266667 30.72-68.266667 68.266667s30.72 68.266667 68.266667 68.266667 68.266667-30.72 68.266666-68.266667-30.72-68.266667-68.266666-68.266667zM798.72 1024c-58.026667 0-102.4-44.373333-102.4-102.4s44.373333-102.4 102.4-102.4 102.4 44.373333 102.4 102.4-47.786667 102.4-102.4 102.4z m0-170.666667c-37.546667 0-68.266667 30.72-68.266667 68.266667s30.72 68.266667 68.266667 68.266667 68.266667-30.72 68.266667-68.266667-30.72-68.266667-68.266667-68.266667zM866.986667 785.066667H375.466667c-68.266667 0-129.706667-51.2-143.36-119.466667L126.293333 136.533333H17.066667C6.826667 136.533333 0 129.706667 0 119.466667S6.826667 102.4 17.066667 102.4h122.88c6.826667 0 13.653333 6.826667 17.066666 13.653333l105.813334 542.72C276.48 713.386667 320.853333 750.933333 375.466667 750.933333h491.52c10.24 0 17.066667 6.826667 17.066666 17.066667s-6.826667 17.066667-17.066666 17.066667z"
          fill={active?"#2e59f4":"#666666"}
        />
        <path
          d="M252.586667 682.666667c-6.826667 0-13.653333-6.826667-17.066667-13.653334l-85.333333-409.6c0-3.413333 0-10.24 3.413333-13.653333s6.826667-6.826667 13.653333-6.826667h365.226667c10.24 0 17.066667 6.826667 17.066667 17.066667s-10.24 17.066667-17.066667 17.066667H187.733333l78.506667 372.053333L887.466667 566.613333l27.306666-109.226666c3.413333-10.24 10.24-13.653333 20.48-13.653334 10.24 3.413333 13.653333 10.24 13.653334 20.48l-30.72 122.88c-3.413333 6.826667-6.826667 10.24-13.653334 13.653334L252.586667 682.666667c3.413333 0 0 0 0 0z"
          fill={active?"#2e59f4":"#666666"}
        />
        <path
          d="M768 307.2c-3.413333 0-10.24 0-13.653333-3.413333l-68.266667-68.266667c-6.826667-6.826667-6.826667-17.066667 0-23.893333s17.066667-6.826667 23.893333 0l58.026667 58.026666 160.426667-126.293333c6.826667-6.826667 17.066667-3.413333 23.893333 3.413333 6.826667 6.826667 3.413333 17.066667-3.413333 23.893334l-170.666667 136.533333h-10.24z"
          fill={active?"#2e59f4":"#666666"}
        />
        <path
          d="M802.133333 443.733333c-122.88 0-221.866667-98.986667-221.866666-221.866666S679.253333 0 802.133333 0 1024 98.986667 1024 221.866667 925.013333 443.733333 802.133333 443.733333z m0-409.6c-102.4 0-187.733333 85.333333-187.733333 187.733334s85.333333 187.733333 187.733333 187.733333S989.866667 324.266667 989.866667 221.866667 904.533333 34.133333 802.133333 34.133333z"
          fill={active?"#2e59f4":"#666666"}
        />
      </svg>
    </SvgIcon>
  );
}

export default DoneIcon;