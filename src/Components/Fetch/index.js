import React, { useEffect, useState } from "react";

function Fetch({ date }) {
  const [sunrise, setSunrise] = useState("");
  const lat = 52.4862;
  const lng = 1.8904;
  // const date = "2022-03-27";
  const stringDate = date.toLocaleDateString();
  console.log(stringDate);
  // const hyphenDate = stringDate.replaceAll("/", "-");
  // console.log(hyphenDate);
  const arrDate = stringDate.split("/");
  console.log(arrDate);
  const reverseDate = arrDate.reverse();
  console.log(reverseDate);
  const formattedDate = arrDate.join("-");
  console.log(formattedDate);

  useEffect(() => {
    async function getSomeStats() {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`
      );
      const data = await response.json();
      setSunrise(data.results.sunrise);
      console.log(data);
    }
    getSomeStats();
  }, []);

  return (
    <div>
      <h1>the sun will rise in Birmingham at {sunrise} today</h1>
    </div>
  );
}

export default Fetch;
