// import Usecountry from "../../Usecountry"
// import React from "react";
// import './../pages/Country.css'

// export function Country(){
//   const {data,load,error}=Usecountry("https://countriesnow.space/api/v0.1/countries/flag/images");
//   if (load) return <p>loading...</p>;
//   if (error) return <p>Error:{error}</p>
//   return(
//     <div className="country-grid">
//       {data?.data?.map((country, index) => (
//         <div className="country-card" key={index}>
//           <img src={country.flag} alt={`${country.name} flag`} className="flag-img" />
//           <h3>{country.name}</h3>
//         </div>
//       ))}
//     </div>

//   )
// }



// import Usecountry from "../../Usecountry";
// import React, { useState } from "react";
// import './../pages/Country.css';

// export function Country() {
//   const { data, load, error } = Usecountry("https://countriesnow.space/api/v0.1/countries/flag/images");
//   const [currentPage, setCurrentPage] = useState(1);
//   const countriesPerPage = 12;

//   if (load) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const countries = data?.data || [];
//   const totalPages = Math.ceil(countries.length / countriesPerPage);
//   const startIndex = (currentPage - 1) * countriesPerPage;
//   const currentCountries = countries.slice(startIndex, startIndex + countriesPerPage);

//   const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
//   const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

//   return (
//     <div>
//       <div className="country-grid">
//         {currentCountries.map((country, index) => (
//           <div className="country-card" key={index}>
//             <img src={country.flag} alt={`${country.name} flag`} className="flag-img" />
//             <h3>{country.name}</h3>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import Usecountry from "../../Usecountry";
// import './../pages/Country.css';

// export function Country() {
//   const { data, loading, error } = Usecountry("https://countriesnow.space/api/v0.1/countries/flag/images");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 12;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const totalPages = Math.ceil(data?.data?.length / itemsPerPage);
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = data?.data?.slice(startIndex, endIndex);

//   return (
//     <>
//       <div className="card-container">
//         {currentItems?.map((item, index) => (
//           <div key={index} className="card">
//             <img src={item.flag} alt={item.name} />
//             <h3>{item.name}</h3>
//             <h5>Code:{item.iso2}</h5>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))} disabled={page === 1}
// >
//           Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => setPage(index + 1)}
//             disabled={page === index + 1}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} disabled={page === totalPages}>
//           Next
//         </button>
//       </div>
//     </>
//   );
// }



import { useState } from "react";
import Usecountry from "../../Usecountry";
import "./../pages/Country.css";

export function Country() {
  const { data, loading, error } = Usecountry("https://countriesnow.space/api/v0.1/countries/flag/images");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 16;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter countries by search term
  const filteredItems = data?.data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems?.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems?.slice(startIndex, endIndex);

  return (
    <>
      <input
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1); // reset to first page on search
        }}
        className="search-input"
      />

      <div className="card-container">
        {currentItems?.map((item, index) => (
          <div key={index} className="card">
            <img src={item.flag} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {filteredItems?.length === 0 && (
        <p style={{ textAlign: "center", color: "#fff" }}>No countries found.</p>
      )}

      <div className="pagination">
        <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))} disabled={page === 1}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            disabled={page === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}