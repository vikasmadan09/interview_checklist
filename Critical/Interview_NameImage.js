import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10", { data: [] })
      .then((res) => {
        setData(res.data.results);
        setFiltered(res.data.results);
      });
  }, []);
  console.log(data);
  console.log(user);
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      {user}
      <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button
          onClick={() => {
            const filtered = data.filter((item) => {
              let fullName = item.name.first + item.name.last;
              if (fullName.toLowerCase().includes(user.toLowerCase())) {
                console.log(item);
                return item;
              }
              return "";
            });
            setFiltered(filtered);
          }}
        >
          Search
        </button>
        <ul>
          {filter.map((item) => {
            return (
              <li>
                <img
                  src={item.picture.large}
                  alt={`${item.name.first}${item.name.last}`}
                />
                {item.name.first}
                {item.name.last}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
