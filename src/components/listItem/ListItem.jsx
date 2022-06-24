import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./listItem.scss";

export default function ListItem() {
  return (
    <div className="listItem">
      <img src="https://user-images.githubusercontent.com/72781778/175435865-c7154829-289b-4bf0-aae6-5dc3ba6f49b3.png" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1hour 14 mins</span>
          <span>+16</span>
          <span>2022</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ab!
          Lorem ipsum dolor sit amet.
        </div>
        <div className="genre">slice of life</div>
      </div>
    </div>
  )
}
