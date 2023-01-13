// // const accessKeyId = process.env.AWS_ACCESS_KEY
// // const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
// // const region = process.env.AWS_BUCKET_REGION

// const config = {
//     db: {
//         host     : rds_host,
//         user     : rds_user,
//         password : rds_password,
//         port     : rds_port,
//         database : rds_database
//     }
// };

// module.exports = config;

const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const region = process.env.AWS_BUCKET_REGION

const config = {
    db: {
        host     : process.env.rds_host,
        user     : process.env.rds_user,
        password : process.env.rds_password,
        port     : process.env.rds_port,
        database : process.env.rds_database
    }
};

module.exports = config;