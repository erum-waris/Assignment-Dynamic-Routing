import { CountryDetails } from "../../../../../types/Types";



const Countries: CountryDetails[] = [
  {

    name: "Pakistan",
    capital: "Islamabad",
    population: 232700000
  },
  {
    name: "India",
    capital: "New Delhi",
    population: 1380004385
  },
  {
    name: "China",
    capital: "Beijing",
    population: 1439323776
  },
  {
    name: "Oman",
    capital: "Governing",
    population: 331002651
  },
  {
    name: "Indonesia",
    capital: "Jakarta",
    population: 273523615
  },
  {
    name: "UnitedStates",
    capital: "Washington D.C.",
    population: 331002651
  }
];

   export default  function CountryName({ params }: { params: { country_name: string } }) {

    <h1>Country List will be shown here</h1>
        const favouriteCountry = Countries.find(
          (myFavCountry) => myFavCountry.name.toLowerCase() === params.country_name
        );
        if (!favouriteCountry) {
          return <h1>Country not found</h1>;
        }
        return (
          <div >

            <h1 className="text-5xl font-bold">Country Information</h1>
         
            <h2 className="text-2xl font-bold">Country Name: {favouriteCountry.name}</h2>

            <h2 className="text-2xl font-bold">Country Capital: {favouriteCountry.capital}</h2>

            <h2 className="text-2xl font-bold">Country Population: {favouriteCountry.population}</h2>
          </div>
        );
      }
