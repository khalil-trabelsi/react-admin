import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/features/Featured";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import TableList from "../../components/table/TableList";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title={"Last 6 Mounth (Revenue)"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}
