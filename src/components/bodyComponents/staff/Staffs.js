import productList from "../inventory/productList";

const staffs = [{
    id:1,firstName: "Adhiyaman",
    lastName: "Sakthivel",
    staffId: "DOBI005482",
    position: "Software Engineer",
    username: "adhiyaman",
    mobile: "+91 8835669893",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:2,firstName: "Arun",
    lastName: "Kumar",
    staffId: "DOBI005483",
    position: "Marketing Excecutive",
    username: "arunkumar",
    mobile: "+91 9515487258",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
}
,{
    id:3,firstName: "Leena",
    lastName: "Joseph",
    staffId: "DOBI005485",
    position: "Recepsionist",
    username: "leenajoe",
    mobile: "+91 9835658936",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
}];
export default staffs;