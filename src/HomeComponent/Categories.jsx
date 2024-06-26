import React from "react";
import icon1 from "../assets/icons/icon-01.png";
import icon2 from "../assets/icons/icon-02.png";
import icon3 from "../assets/icons/icon-03.png";
import icon4 from "../assets/icons/icon-04.png";
import icon5 from "../assets/icons/icon-05.png";
import icon6 from "../assets/icons/icon-06.png";
import icon7 from "../assets/icons/icon-07.png";
import icon8 from "..//assets/icons/icon-08.png";

function Categories() {
  const categoryList = [
    {
      url: icon1,
      bgColoe: "light-blue",
      id: 1,
    },
    {
      url: icon2,
      bgColoe: "categorie-icon red",
      id: 2,
    },
    {
      url: icon6,
      bgColoe: "categorie-icon yellow",
      id: 3,
    },
    {
      url: icon4,
      bgColoe: "categorie-icon orange",
      id: 4,
    },
    {
      url: icon5,
      bgColoe: "categorie-icon green",
      id: 5,
    },
    {
      url: icon3,
      bgColoe: "categorie-icon purple",
      id: 6,
    },
    {
      url: icon7,
      bgColoe: "categorie-icon blue",
      id: 7,
    },
    {
      url: icon8,
      bgColoe: "categorie-icon cyan",
      id: 8,
    },
  ];
  return (
    <div className="Categories" style={{paddingTop:"50px",paddingBottom:"50px"}}>
      <div className="container">
        <div className="section-heading">
          <h2>Popular Job Categories</h2>
          <p>Know your really worth and find the job that qualify your life.</p>
        </div>
        <div
          className="flex flex-wrap"
          style={{ marginTop: "-1.9rem !important" ,justifyContent:"center"}}
        >
          {categoryList.map((c) => (
            <div
              className="sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4 mt-1-9 mt-3"
              key={c.id}
            >
              <div className="card card-style1 h-full">
                <div className="card-body">
                  <div className={`categorie-icon ${c.bgColoe}`}>
                    <img src={c.url} alt="..." />
                  </div>
                  <h3 className="h5">
                    <a href="job-listing.html">Accounting</a>
                  </h3>
                  <span className="mb-0 display-30 font-weight-600">
                    (2 open positions)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
