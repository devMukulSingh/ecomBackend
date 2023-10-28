import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import db from "./db/db.js";
import defaultData from "./default.js";
const app = express();
import { v4 as uuid} from "uuid";

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json( { extended:true } ));
app.use(express.urlencoded( {extended:true }));
app.use("/", router);
db();
app.listen( PORT , () => {
    console.log(`Server is running at PORT ${PORT}`);
})
defaultData();

export const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export const paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = 100;
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'mukulsingh2276@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890';



