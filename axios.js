// Node with fetch:
const axios = require("axios");

// http.get("http://coderbyte.com/api/challenges/json/age-counting", (res) => {
//   let data = "";

//   // Parse json data here...
//   console.log(res);
// });

const getAgeData = async () => {
  try {
    const data = await axios.get(
      "http://coderbyte.com/api/challenges/json/age-counting"
    );
    // return data.data;

    let rawData = data.data.data;

    //
    // var obj = JSON.parse(`{ ${data.data.data} }`);
    const newOne = rawData.replace(/=/g, ":");
    // var obj = JSON.parse(`{${newOne}}`);
    console.log("🚀 ~ ", `{ ${newOne} }`);

    // console.log(`{ ${data.data.data} }`);
    // var str = '{ "name": "John Doe", "age": 42 }';
    // var obj = JSON.parse(str);
  } catch (e) {
    console.log(e);
  }
};
getAgeData();

// const countAges = async () => {
//   const ages = await getAgeData();
//   for (age in ages) {
//     console.log(ages[age]);
//   }
// };

// countAges();
