import React, { Component } from "react";
import WeatherFunc from "../pages/components/weather/weatherFunc";
import Weather from "../pages/components/weather/weather";

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid4">
        <div className="homeTop">
          <h1>Helping Hands</h1>

          <hr />
          <div className="homePDiv">
            <p>
              Homelessness affects men, women, and children of all races and
              ethnicities. In the United States, approximately 3 million
              persons, 1% of the population, are homeless in a given year. On
              any given night in 2013, more than 610,000 persons were homeless;
              approximately 36% were families and 35% were unsheltered.2 Most
              homeless persons' experiences are temporary, lasting a few days to
              several weeks.
            </p>
            <p>
              Over the past 30 years, the increase in poverty and the growing
              shortage of affordable housing are the trends largely responsible
              for the increase in homelessness.3 In 2009, 14.3% of individuals
              and 10.5% of families had incomes below the poverty level, putting
              approximately 46.2 million Americans at risk of homelessness if
              they experience a single catastrophic financial or medical event.4
              Economic and social factors linked to homelessness include
              unstable employment, low wages, declining public assistance,
              deinstitutionalization of persons with mental illness, being a
              veteran, lack of inexpensive housing, low education level, and
              lack of affordable health care. Any of these factors, compounded
              by alcohol and drug abuse, domestic violence, mental and physical
              illness, or abuse and neglect, can cause a person to become
              homeless.5,6
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
