import "./leftBar.scss";
import courses from "../../assets/courses.png";
import events from "../../assets/events.png";
import friend from "../../assets/friend.png";
import fundraiser from "../../assets/fundraiser.png";
import gallery from "../../assets/gallery.png";
import gaming from "../../assets/gaming.png";
import group from "../../assets/group.png";
import marketplace from "../../assets/marketplace.png";
import memories from "../../assets/memories.png";
import messages from "../../assets/messages.png";
import tutorial from "../../assets/tutorial.png";
import videos from "../../assets/videos.png";
import watch from "../../assets/watch.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friend} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={group} alt="" />
            <span>Group</span>
          </div>

          <div className="item">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>

          <div className="item">
            <img src={events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src={tutorial} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
