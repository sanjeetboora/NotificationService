//"mongodb://127.0.0.1:27017/<db_name>";
require('dotenv').config();

const notificationServiceDbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crmApp';
const dbName = "crmapp-db";
module.exports = { db_uri: notificationServiceDbUri, dbName };