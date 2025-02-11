

// let http = require('http');
// let url = require('url');

// let server = http.createServer(async (req, res) => {

//     let data=await fetch("https://fakestoreapi.com/products")
//    let dataval= await data.json();

//     var urldata= url.parse(req.url,true);
//     var cate=urldata.query.cate;


//     if(cate=="m"){
//         var mens=dataval.filter((item)=>{
//            return item.category=="men's clothing";
//         });
//         res.write(JSON.stringify(mens));
//         res.end();    

//     }else if(cate=="w"){
//         var womens=dataval.filter((item)=>{
//            return item.category=="women's clothing";
//         });
//         res.write(JSON.stringify(womens));
//         res.end();

//     }else if(cate=="j"){
//         var jewel=dataval.filter((item)=>{
//            return item.category=="jewelery";
//         }); 
//         res.write(JSON.stringify(jewel));
//         res.end();

//     }else if(cate=="e"){
//         var elec=dataval.filter((item)=>{
//            return item.category=="electronics";
//         });
//         res.write(JSON.stringify(elec));
//         res.end();
//     }else{
//         res.end(JSON.stringify(dataval));
//     }   


// });

// server.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });




//SWITCH CASE

let http = require('http');
let url = require('url');

let server = http.createServer(async (req, res) => {

    let data=await fetch("https://fakestoreapi.com/products")
   let dataval= await data.json();

    var urldata= url.parse(req.url,true);
    var cate=urldata.query.cate;

    switch(cate){
        case "m":
            var mens=dataval.filter((item)=>{
                return item.category=="men's clothing";
            });
            res.write(JSON.stringify(mens));
            res.end();
            break;
        case "w":
            var womens=dataval.filter((item)=>{
                return item.category=="women's clothing";
            });
            res.write(JSON.stringify(womens));
            res.end();
            break;
        case "j":
            var jewel=dataval.filter((item)=>{
                return item.category=="jewelery";
            });
            res.write(JSON.stringify(jewel));
            res.end();
            break;
        case "e":
            var elec=dataval.filter((item)=>{
                return item.category=="electronics";
            });
            res.write(JSON.stringify(elec));
            res.end();
            break;
            
        default:
            res.end(JSON.stringify(dataval));
            break;

    }



});
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});