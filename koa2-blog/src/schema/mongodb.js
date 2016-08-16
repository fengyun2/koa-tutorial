import config from '../config/mongodb';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const mongoLink = `mongodb://${config.host}:${config.port}/${config.database}`;

const db = mongoose.createConnection(mongoLink);

db.on('error', (err) => {
    console.error(`数据库连接失败!`);
});

db.on('open', () => {
    console.log(`数据库连接成功!`);
});

export default db;