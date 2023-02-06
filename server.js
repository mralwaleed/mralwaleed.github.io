// import 'regenerator-runtime/runtime';
// import axios from 'axios';


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

//     const { window } = new JSDOM(`...`);
//     // or even
//    const { document } = (new JSDOM(`...`)).window;
   // const dom = new JSDOM("<html><body><h1>Hello</h1></body></html>");
    // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    // console.log(dom.window.document.querySelector("div").textContent); 


    
    var MECHAT_ID = "merchant.chok.elm.sa.payment.sandbox"; 
    var BACKENDURL_URL_VALIDATE_SESSION = "https://babb-86-51-46-8.in.ngrok.io/validateSession"; 
    // var BACKENDURL_URL_PAY = window.location.href + "pay";
    
    //    console.log(window.location.href)
    //     console.log("test");
    
    
    var appleButton = document.querySelector(".apple-pay-button");
    // console.log(appleButton);
    
    // if(
    //    window.ApplePaySession && 
    //    ApplePaySession.canMakePaymentsWithActiveCard(MECHAT_ID)
    // ){
    //    appleButton.style.display = "block";
    // }
    
    
    
    
    // console.log("appleButton");
    // console.log("test");

    appleButton.addEventListener("click", function () {
        // console.log("test");
        var applePaySession = new ApplePaySession(6, {
            countryCode: "SA",
            currencyCode: "SAR",
            supportedNetworks: [
                "visa",
                "masterCard",
                "amex",
                "mada"
            ],
            merchantCapabilities: ["supports3DS"],

            total: {
                label: "ELM Pay",
                amount: "1.99"
            }

        }); 
    
       applePaySession.begin(); 

    //    applePaySession.begin(); 
    
       applePaySession.onvalidatemerchant = function(event){
        console.log("event : "+JSON.stringify(event));
        var theValidationURL = event.validationURL; 
        console.log("val"+theValidationURL);
        validateTheSession(theValidationURL, function(merchantSession){
            try{
            //     console.log("test");
                console.log(merchantSession);
            //     console.log(JSON.stringify(merchantSession));
            //   //  console.log(JSON.parse(merchantSession));
            //     var ss= JSON.stringify(merchantSession);
            //     var t= JSON.parse(ss);        
            //     console.log(t);



            //  // console.log(applePaySession.completeMerchantValidation(merchantSession));
            //     applePaySession.completeMerchantValidation(t);
                applePaySession.completeMerchantValidation(merchantSession);

                
                console.log("finsh");
            }catch(err){
                
                console.log("error " + err);
            }
            
        }
        
        )}
    
    
    });



        var validateTheSession = function(theValidationURL, callback){
         
        axios.post(
            BACKENDURL_URL_VALIDATE_SESSION,
            {
                appleUrl: theValidationURL
            },
            {
               hraders: {
                "Access-Control-Allow-Origin": "*"
               }
            }
        )
        .then(function(response){
            callback(response.data);
        } )
            
    }
    
    
    
//     const https = require('https');
// const fs = require('fs');
// const options = {
//   key: fs.readFileSync('/Users/alwalbader/Desktop/projects/apple-pay-demo/front-end/localhost-key.pem'),
//   cert: fs.readFileSync('/Users/alwalbader/Desktop/projects/apple-pay-demo/front-end/localhost.pem'),
// };
// https
//   .createServer(options, function (req, res) {
//     // server code
//   })
//   .listen({PORT});
    









































// // const https = require('https');
// const fs = require('fs');
// const options = {
//   key: fs.readFileSync('../localhost-key.pem'),
//   cert: fs.readFileSync('../localhost.pem'),
// };
// https
//   .createServer(options, function (req, res) {
    
//     var MECHAT_ID = "merchant.chok.elm.sa.payment.sandbox"; 
// var BACKENDURL_URL_VALIDATE_SESSION = "https://8524-86-51-46-8.in.ngrok.io/valiateSession"; 
// var BACKENDURL_URL_PAY = window.location.href + "pay";

// //    console.log(window.location.href)
// //     console.log("test");


// var appleButton = document.querySelector(".apple-pay-button");
// console.log(appleButton);

// // if(
// //    window.ApplePaySession && 
// //    ApplePaySession.canMakePaymentsWithActiveCard(MECHAT_ID)
// // ){
// //    appleButton.style.display = "block";
// // }




// // console.log("appleButton");
// // console.log("test");

//  appleButton.addEventListener("click", function(){
   
//        var applePaySession =  new ApplePaySession(6,{
//            countryCode: "SA",
//            currencyCode:"SAR", 
//            supportedNetworks:  [
//                "visa",
//                "masterCard",
//                "amex",
//                "mada"
//            ],
//            merchantCapabilities:["supports3DS"],

//            total:{
//                label: "ELM Pay",
//                amount: "1.99"
//            }

//    }); 

   
//    applePaySession.begin(); 

// //    applePaySession.onvalidatemerchant = function(event){
// //     var theValidationURL = event.validationURL; 
// //     validateTheSession(theValidationURL, function(merchantSession){
// //         applePaySession.completeMerchantValidation
// //     }
    
// //     )}



// });




// // var validateTheSession = function(theValidationURL, callback){
// //     axios.post(
// //         BACKENDURL_URL_VALIDATE_SESSION,
// //         {
// //             appleUrl: theValidationURL
// //         },
// //         {
// //            hraders: {
// //             "Access-Control-Allow-Origin": "*"
// //            }
// //         }
// //     )
// //     .then(function(response){
// //         callback(response.data);
// //     } )
        
// // }



//   })
//   .listen(5002);