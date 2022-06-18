import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";

function Single() {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <div className="title">Information</div>
            <div className="left-body">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="image"
              />
              <div className="info">
                <h4 className="info-title">Jane Doe</h4>
                <div className="info-desc">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="info-desc">
                  <span className="itemKey">Phone Number: </span>
                  <span className="itemValue">+216 53655709</span>
                </div>
                <div className="info-desc">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="info-desc">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Tunisia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Mounth)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Latest operations</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Single;
