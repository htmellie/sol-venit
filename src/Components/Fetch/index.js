import React from 'react';

const lat = 0;
const lng = 0;

async function getSomeStats() {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
  );
}

function Fetch() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default Fetch;
