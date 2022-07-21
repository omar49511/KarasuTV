import { ArrowBack } from "@material-ui/icons";
import "./watch.scss";
export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBack/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="https://user-images.githubusercontent.com/72781778/178127011-76ee7e16-126b-4bc1-bac7-5266e206a116.mp4"></video>
    </div>
  )
}
