import React, { useEffect, useState } from "react";

function formattedDate(date) {
  return date.toLocaleDateString().split("/").reverse().join("-");
}
function Fetch({ date }) {
  const [sunrise, setSunrise] = useState("");
  const lat = 52.4862;
  const lng = 1.8904;
  // const formattedDate = date
  //   .toLocaleDateString()
  //   .split("/")
  //   .reverse()
  //   .join("-");

  useEffect(() => {
    async function getSomeStats() {
      const requestDate = date !== null ? formattedDate(date) : "";
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${requestDate}`
      );
      const data = await response.json();
      setSunrise(data.results.sunrise);
      console.log(data);
    }
    getSomeStats();
  }, [date]);

  return (
    <div>
      <h1>the sun will rise in Birmingham at {sunrise} today</h1>
    </div>
  );
}

export default Fetch;
