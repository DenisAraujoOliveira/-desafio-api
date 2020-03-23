const redis = require('redis');
const cache = redis.createClient();

cache.on("connect",()=>{
    // logger
    console.log("Redis connected")
})
cache.on("error",(err)=>{
    // logger
    console.log("Redis error",err)
});

const timeType = "EX";
const time = process.env.TOKEN_EXPIRE_CACHE;

class Cache {
    constructor(){
    }
    getCache(keyName){
        return new Promise(async (resolve)=>{
            cache.get(keyName,(err,reply)=>{
                resolve(reply);
            });
        })
    }
    setCache(keyName,value){
        return new Promise(async (resolve)=>{
            cache.set(keyName,value,timeType,time,(err,reply)=>{
                resolve(reply);
            })
        });
    }
}

module.exports = new Cache();