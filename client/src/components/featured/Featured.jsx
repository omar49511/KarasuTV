import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value= "action">Action</option>
                    <option value= "martial-arts">martial arts</option>
                    <option value= "adventure">adventure</option>
                    <option value= "races">races</option>
                    <option value= "science-fiction">science fiction</option>
                    <option value= "comedy">comedy</option>
                    <option value= "dementia">dementia</option>
                    <option value= "demons">demons</option>
                    <option value= "sports">sports</option>
                    <option value= "drama">drama</option>
                    <option value= "ecchi">ecchi</option>
                    <option value= "schoolchildren">schoolchildren</option>
                    <option value= "spatial">spatial</option>
                    <option value= "fantasy">fantasy</option>
                    <option value= "harem">harem</option>
                    <option value= "childish">childish</option>
                    <option value= "josei">josei</option>
                    <option value= "games">games</option>
                    <option value= "magic">magic</option>
                    <option value= "fuse">fuse</option>
                    <option value= "military">military</option>
                    <option value= "mistery">mistery</option>
                    <option value= "music">music</option>
                    <option value= "parody">parody</option>
                    <option value= "police">police</option>
                    <option value= "psychological">psychological</option>
                    <option value= "slice-of-life">slice of life</option>
                    <option value= "romance">romance</option>
                    <option value= "samurai">samurai</option>
                    <option value= "seinen">seinen</option>
                    <option value= "shoujo">shoujo</option>
                    <option value= "shounen">shounen</option>
                    <option value= "supernatural">supernatural</option>
                    <option value= "superpowers">superpowers</option>
                    <option value= "thriller">thriller</option>
                    <option value= "horror">horror</option>
                    <option value= "vampires">vampires</option>
                    <option value= "yaoi">yaoi</option>
                    <option value= "yuri">yuri</option>
                    <option value= "historical">historical</option>
                </select>
            </div>
        )}
      <img src="https://img1.wallspic.com/crops/1/5/2/4/6/164251/164251-ilustracion-anime-arte_digital-ambiente-pintura-1920x1080.jpg" alt="" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sword_Art_Online_anime_logo.svg" alt=""/>
            <span className="desc">
            Asuna and the team manage to convince Kirito to return for a new game called Ordinal Scale, but once they're inside they quickly discover it'll be anything but fun.  Karasu TV!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>
                        Play
                    </span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>
                        Info
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}
