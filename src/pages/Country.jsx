import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response.data);
    });
  },[]);

  if (isPending) {
    return <Loader />
  }

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((country, index) => {
          return(
            <CountryCard country={country} key={index} />
          );
        })}
      </ul>
    </section>
  );
};