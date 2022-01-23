import React, { useEffect } from "react";

function Fetch() {
  const lat = 52.4862;
  const lng = 1.8904;

  useEffect(() => {
    async function getSomeStats() {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=2022-02-27`
      );
      const data = await response.json();
      console.log(data);
    }
    getSomeStats();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default Fetch;
