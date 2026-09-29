import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { getCountryIndivData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export function CountryDetails() {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryIndivData(params.id);
      console.log(response);
      if (response.status === 200) {
        setCountry(response.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />
  }

 return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.name} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Name:</span>
                  {country.nativeName}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital || 'N/A'}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.topLevelDomain[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {country.currencies 
                    ? country.currencies
                    .map((currency) => (
                      currency.name 
                    ))
                    .join(", ")
                    : 'N/A'
                  }
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {country.languages
                    .map((language) => (
                      language.name
                    ))
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};