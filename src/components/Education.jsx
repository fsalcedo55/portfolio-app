import React from "react";

const education = () => {
  const myEducation = [
    {
      schoolName: "Ironhack",
      city: "Miami",
      state: "FL",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2021",
      schoolEnded: "2021",
    },
    {
      schoolName: "Florida International University",
      city: "Miami",
      state: "FL",
      degree: "Master of Architecture",
      schoolStarted: "2018",
      schoolEnded: "2020",
    },
    {
      schoolName: "Boston Architectural College",
      city: "Boston",
      state: "MA",
      degree: "Bachelor of Architecture",
      schoolStarted: "2016",
      schoolEnded: "2018",
    },
    {
      schoolName: "Miami-Dade College",
      city: "Miami",
      state: "FL",
      degree: "Associate of Architecture",
      schoolStarted: "2013",
      schoolEnded: "2016",
    },
  ];

  return (
    <div className="pl-32 max-w-2xl">
      <div className="flex flex-row pt-10 pb-5">
        <p className="text-7xl font-bold text-darkSand">04. </p>
        <p className="text-7xl font-bold text-white">Education</p>
        <hr
          style={{
            color: "gray",
            backgroundColor: "red",
            height: 5,
          }}
        />
      </div>
      {myEducation.map((eachSchool, index) => {
        return (
          <div className="pt-5 text-gray" key={index}>
            <h3 className="font-bold">{eachSchool.schoolName}</h3>
            <p className="font-extralight">
              {eachSchool.city}, {eachSchool.state}
            </p>
            <h4 className="font-extralight">{eachSchool.degree}</h4>
            <p className="font-extralight">
              {eachSchool.schoolStarted} - {eachSchool.schoolEnded}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default education;
