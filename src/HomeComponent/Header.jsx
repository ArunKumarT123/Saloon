import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

function Header() {
  const menus = [
    { name: "HOME", id: 1 },
    { name: "PAGES", id: 2 },
    { name: "JOB LISTING", id: 3 },
    { name: "EXPLORE", id: 4 },
    { name: "ELEMENTS", id: 5 },
    { name: "BLOG", id: 6 },
  ];
  return (
    <div className="flex gap-6 justify-between bg-gray-800 h-20 items-center p-5">
      <div >
        <img src={"src/assets/logos/logo-white.png"} style={{width:"200px",height:"50px"}}/>
      </div>
      <div className="flex gap-10 items-center">
      <div className="flex gap-8">
        {menus.map((m) => {
          return <div className="text-2xl font-bold text-orange-50 hover:text-orange-400" >{m.name}</div>;
        })}
      </div>
      <div className="flex gap-10 items-center">
        <SearchIcon className="text-orange-50 hover:text-orange-400" style={{width:"40px",height:'40px'}}/>
        <Button variant="contained"  className="text-orange-50text-2xl font-bold" style={{background:"rgb(255 142 0)",fontSize:"22px",fontWeight:"600",textTransform:"none"}}>Post a Job</Button>
      </div>
      </div>
    </div>
  );
}

export default Header;
