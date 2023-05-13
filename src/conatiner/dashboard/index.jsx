/** @format */

import React from "react";
import Banner from "../../component/banner";
import DashCard from "../../component/dash-card";
import Nav from "../../component/nav";
import FollowInstagram from "../../component/follow-nstagram";
import TrustBlog from "../../component/trust-blog";
import Footor from "../../component/footor";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <Banner />
      <DashCard />
      <TrustBlog />
      <FollowInstagram />
      <Footor />
    </>
  );
};

export default Dashboard;
