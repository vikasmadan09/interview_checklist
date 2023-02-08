import React, { useEffect, useState } from "react";
import "./style.css";
// table,
// td,
// th {
//   border: 1px solid;
// }
// table {
//   border-collapse: collapse;
// }
// https://api.spacexdata.com/v3/launches?limit=10
//   links.mission_patch_small, mission_name, launch_year,mission_details
export default function App() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredData, setFilteredDate] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setFilteredDate(res.results);
      });
  }, []);
  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      if (
        item.name.first.toLowerCase().includes(searchKey) ||
        item.name.last.toLowerCase().includes(searchKey)
      ) {
        return item;
      }
    });

    setFilteredDate(filteredData);
  };
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
        />
        <button style={{ marginLeft: 10 }} onClick={handleSearch}>
          Search
        </button>
      </div>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => {
            return (
              <tr>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
