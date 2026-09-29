import { NavLink } from "react-router";

export const CountryCard = ({ country }) => {
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={country.flags.svg} alt={country.flag} />
        <div className="countryInfo">
          <p className="card-title">
            {country.name.length > 10 
              ? `${country.name.slice(0, 10)}...`
              : country.name
            }
          </p>
          <p>
            <span className="card-description">Population:</span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {country.region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {country.capital}
          </p>

          <NavLink to={`/country/${country.name}`}>
            <button>
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};