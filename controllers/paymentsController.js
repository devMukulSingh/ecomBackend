// import { paytmMerchantKey, paytmParams } from "..";
// import PaytmChecksum from "../paytm/PaytmChecksum.js";
// import https from "https";
// import formidable from "formidable";


// export const paymentController = async(req,res) => {
    
//     try {
//         const paytmChecksum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey);
    
//         const params = {
//             ...paytmParams, 'CHECKSUMHASH':paytmChecksum
//         }
//         res.status(200).json(params);
//     } catch (error) {
//         res.status(500).json(`Error in paymentController ${error}`);
//     }
// } 
// export const paymentResponse = async(req,res) => {
//     const form = new formidable.IncomingForm();
//     const paytmChecksum = req.body.CHECKSUMHASH;
//     delete req.body.CHECKSUMHASH;

//     const isVerifySignature = paytmChecksum.verifySignature(req.body.paytmMerchantKey, paytmChecksum);
//     if(isVerifySignature){
//         const paytmParams = {};
//         paytmParams['MID'] = req.body.MID;
//         paytmParams['ORDERID'] = req.body.ORDERID;

//         paytmChecksum.generateSignature(paytmParams, paytmMerchantKey).then( function(checksum){

//             paytmParams['CHECKSUM'] = checksum;
//             const post_data = JSON.stringify(paytmParams);

//             const options = {
//                 hostname :' securegw-stage.paytm.in',
//                 port: 443,
//                 path: '/order/status',
//                 headers : {
//                     'Content-Type': 'application/json',
//                     'Content-Length' : post_data.length
//                 }
//             }
//             let res = "";
//             const post_req = https.request(options, function( post_res ) {
//                 post_res.on('data',function(chunk){
//                     res+=chunk;

//                 })
//                 post_res.on('end', function() {
//                     const result = JSON.parse(res)
//                     response.redirect('http://localhost:3000/')
//                 })
//             });
//             post_req.write(post_data);
//             post_req.end();
//         })
        
        
//     }
//     else{
//         console.log(`Checksum Mismatched`);
//     }
// }