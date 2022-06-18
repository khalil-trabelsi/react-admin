import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import { userInputs } from "../../sourceForm";
import { useState } from "react";

function New({ inputs, title }) {
  const [image, setImage] = useState("");
  console.log(image);
  return (
    <div className="new">
      <SideBar />
      <div className="newCont">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="img">
                  <DriveFolderUploadOutlinedIcon
                    style={{ cursor: "pointer" }}
                  />{" "}
                  Upload an image
                </label>
                <input
                  type="file"
                  id="img"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              {inputs.map((item) => (
                <div className="formInput" key={item.id}>
                  <label htmlFor={item.label}>{item.label}</label>
                  <input
                    type={item.type}
                    id={item.label.toLowerCase()}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
              {/* <div className="formInput">
                <label htmlFor="img">
                  <DriveFolderUploadOutlinedIcon
                    style={{ cursor: "pointer" }}
                  />{" "}
                  Upload an image
                </label>
                <input type="file" id="img" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label htmlFor="username">username</label>
                <input type="text" id="username" placeholder="Khalil" />
              </div>
              <div className="formInput">
                <label htmlFor="fullname">Name and surname</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Khalil TRABELSI"
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Khalil@gmail.com" />
              </div>
              <div className="formInput">
                <label htmlFor="username">Phone</label>
                <input type="text" id="phone" placeholder="2565896" />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Tunis st 1001" />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="Tuinsia" />
              </div> */}
              <button>add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
