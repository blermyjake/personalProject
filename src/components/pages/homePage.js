import React, { Component } from "react";
// import main from "./main.jpg";

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid-home">
        <div className="homeTop">
          {/* <h1 className="mainH1">Helping Hands</h1> */}
          <img id="mainImg" src={require("./main-rightbw.jpg")} alt="" />
        </div>
        {/* <hr /> */}

        <div className="homePDiv">
          <h1 align="center">Helping Hands</h1>
          <p className="mainP">
            Homelessness affects men, women, and children of all races and
            ethnicities. In the United States, approximately 3 million persons,
            1% of the population, are homeless in a given year. On any given
            night in 2013, more than 610,000 persons were homeless;
            approximately 36% were families and 35% were unsheltered.2 Most
            homeless persons' experiences are temporary, lasting a few days to
            several weeks.
          </p>
          <p className="mainP">
            Over the past 30 years, the increase in poverty and the growing
            shortage of affordable housing are the trends largely responsible
            for the increase in homelessness.3 In 2009, 14.3% of individuals and
            10.5% of families had incomes below the poverty level, putting
            approximately 46.2 million Americans at risk of homelessness if they
            experience a single catastrophic financial or medical event.
            Economic and social factors linked to homelessness include unstable
            employment, low wages, declining public assistance,
            deinstitutionalization of persons with mental illness, being a
            veteran, lack of inexpensive housing, low education level, and lack
            of affordable health care. Any of these factors, compounded by
            alcohol and drug abuse, domestic violence, mental and physical
            illness, or abuse and neglect, can cause a person to become
            homeless.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
