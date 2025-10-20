const products = [
    {name:"Redmi", brand:"Xiami", price:3000, color:"black"},
    {name:"Sam", brand:"Samsung", price:4000, color:"gold"},
    {name:"apple", brand:"Apple", price:5000, color:"gold"},
    {name:"Redmi", brand:"Xiami", price:3000, color:"black"},
]
const result =products.map(product => product.color);
console.log(result)
/* explain: map() holo akti array method, jeta protiti element niye kichu
kaj kore ar folafol hisebe new akta array return kore */

/* product => product.color: protiti mobile  theke only color ney */