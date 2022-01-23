import React, {useEffect, useState} from 'react';

function Fetch() {
  const [sunrise, setSunrise] = useState('');
  const lat = 52.4862;
  const lng = 1.8904;

  useEffect(() => {
    async function getSomeStats() {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=2022-02-27`
      );
      const data = await response.json();

      setSunrise(data.results.sunrise);
      console.log(h1text);
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
