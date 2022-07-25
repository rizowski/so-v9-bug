'use strict';

module.exports.hello = async (event) => {
  console.clear();
  const vals = JSON.stringify(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith('AWS'))
      .sort()
      .map((vals) => vals.join('=')),
    null,
    2
  );
  console.log(vals);
  return vals;
};
