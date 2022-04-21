import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$200</p>
        <p className="desc">
          Previous transactions are processing. Last payment may not be
          included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <div className="resultAmount">$15.9k</div>
              <ArrowDropUpIcon fontSize="small" />
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <div className="resultAmount">$15.9k</div>
              <ArrowDropDownIcon fontSize="small" />
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">$15.9k</div>
              <ArrowDropUpIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
