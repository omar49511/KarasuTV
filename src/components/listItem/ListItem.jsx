import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const trailer2 = "https://user-images.githubusercontent.com/72781778/178127011-76ee7e16-126b-4bc1-bac7-5266e206a116.mp4";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://user-images.githubusercontent.com/72781778/175435865-c7154829-289b-4bf0-aae6-5dc3ba6f49b3.png"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer2} autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, ab! Lorem ipsum dolor sit amet.
            </div>
            <div className="genre">slice of life</div>
          </div>
        </>
      )}
    </div>
  );
}
