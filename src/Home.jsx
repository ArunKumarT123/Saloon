import React from "react";
import Header from "./HomeComponent/Header";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "./Home.css";
import Categories from "./HomeComponent/Categories";
import FeaturedJob from "./HomeComponent/FeaturedJob";
import TopCompany from "./HomeComponent/TopCompany";
import Process from "./HomeComponent/Process";
import Homefooter from "./HomeComponent/Homefooter";
import Navbar from "./HomeComponent/Navbar/Navbar";

function Home() {
  
  return (
    <div>
      {/* <Header /> */}
      <Navbar/>
      <div className="home_banner">
        <div className="banner_contain">
          <div className="flex flex-wrap  items-center justify-center min-vh-70 text-center pt-6 md:pt-0 banner_contain_text">
            <div className="lg:w-full pr-4 pl-4 mb-1-9 lg:mb-0 pt-6 pb-12 py-sm-6">
              <h1 className="caption">
                You Can Choose Your <span className="text-orange-500">job</span>
              </h1>
              <p className="text-white caption_p">
                Find perfect job for build your skills. Have many job in this
                platform.
              </p>
            </div>
          </div>

          <div className="search_form" style={{minWidth:"300px",marginTop:"50px"}}>
            <div className="flex flex-wrap gap-9" style={{justifyContent:'center'}}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={{
                  width: "22%",
                  minWidth:"230px",
                }}
                placeholder="Job title, keywords, or company"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={{
                  width: "22%",
                  minWidth:"230px",
                }}
                placeholder="City or postcode"
              />
              <Select
                id="demo-simple-select"
                placeholder="hvhj"
                value={"com"}
                style={{
                  width: "22%",
                  minWidth:"230px",
                }}
              >
                <MenuItem value="com" selected>
                  All Categories
                </MenuItem>
                <MenuItem value="Accounting">Accounting</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Health & Care">Health & Care</MenuItem>
              </Select>

              <Button
                className="text-orange-50text-2xl font-bold"
                style={{
                  background: "rgb(255 142 0)",
                  fontSize: "22px",
                  fontWeight: "600",
                  textTransform: "none",
                  width: "22%",
                  minWidth:"230px",
                }}
                variant="contained"
                startIcon={
                  <SearchIcon
                    className="text-orange-50"
                    style={{ width: "40px", height: "40px" }}
                  />
                }
              >
                Find Job
              </Button>
            </div>
          </div>
        </div>
      </div>



      <Categories/>
      <FeaturedJob/>
      <TopCompany/>
      <Process/>
      <Homefooter/>
    </div>
  );
}

export default Home;
