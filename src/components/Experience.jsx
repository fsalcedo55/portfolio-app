import React from "react";

const experience = () => {
  const placesWhereIWorked = [
    {
      name: "Arquitectonica",
      city: "Miami, FL",
      country: "United States",
      jobTitle: "Project Architect",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2017",
      jobEnded: "Present",
    },
    {
      name: "Amazing company",
      city: "Madrid",
      country: "Spain",
      jobTitle: "Junior for cool things",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2015",
      jobEnded: "2017",
    },
    {
      name: "Cool company",
      city: "Amsterdam",
      country: "Netherlands",
      jobTitle: "Associate Super Intern",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2013",
      jobEnded: "2015",
    },
  ];

  const checkJobEnded = (end) => {
    let endYear;
    if (end === "") {
      endYear = "current";
    } else {
      endYear = end;
    }
    return endYear;
  };

  return (
    <div className="pl-32 max-w-2xl">
      <div className="flex flex-row pt-10 pb-5">
        <p className="text-7xl font-bold text-darkSand">02. </p>
        <p className="text-7xl font-bold text-white">Experience</p>
        <hr
          style={{
            color: "gray",
            backgroundColor: "red",
            height: 5,
          }}
        />
      </div>
      {placesWhereIWorked.map((eachPlace, index) => {
        return (
          <div className="pt-5 text-gray" key={index}>
            <h3 className="font-bold">{eachPlace.name}</h3>
            <p className="font-extralight">
              {eachPlace.city}, {eachPlace.country}
            </p>
            <h4 className="font-extralight">{eachPlace.jobTitle}</h4>
            <p className="font-extralight">{eachPlace.jobDescription}</p>
            <p className="font-extralight">
              {eachPlace.jobStarted} - {checkJobEnded(eachPlace.jobEnded)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default experience;
