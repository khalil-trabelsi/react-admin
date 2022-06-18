import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredBar">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="title"> Total sales made by day</p>
        <p className="amount"> $470</p>
        <p className="desc">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          blanditiis ipsa labore enim accusantium eveniet praesentium saepe id
          nostrum explicabo.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              $12.4k
            </div>
          </div>{" "}
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              $12.4k
            </div>
          </div>{" "}
          <div className="item">
            <div className="itemTitle">Last Mounth</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
