// const data1 = [
//   ['Apples', 10],
//   ['Bananas', 2],
//   ['Carrots', 5],
//   ['Dates', 1],
//   ['Eggplant', 3],
//   ['Figs', 1],
//   ['Gourds', 1]
// ];

// function getRandomWeighted(data) {
//   const totalWeight = data.reduce((acc, [, weight]) => {
//     return acc + weight;
//   }, 0);

//   const threshold = Math.random() * totalWeight;
//   console.log(threshold);

//   let total = 0;

//   for (let idx = 0; idx < data.length; idx++) {
//     const [element, weight] = data[idx];
//     total += weight;

//     if (threshold <= total) {
//       return element;
//     }
//   }
// }

// console.log(getRandomWeighted(data1));
