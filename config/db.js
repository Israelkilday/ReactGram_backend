const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.28audbl.mongodb.net/?retryWrites=true&w=majority`
        );

        console.log("Conectou com o banco!")

        return dbConn;

    } catch (error) {
        console.log(error);
    }
};

conn();

module.exports = conn;



// conection
// L0LASFLCrZtAbTjM password mongodb
// kLEQ0UObatFDXY2q password reactgram