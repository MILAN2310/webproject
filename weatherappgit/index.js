const http = require("http");
const fs = require("fs");
var requests = require("requests");
const port = 3000;
const homefile = fs.readFileSync("home.html","utf-8");

const replaceval = (tempval,orgval) => {
     temperature = tempval.replace("{%location%}",orgval.name).replace("{%country%}",orgval.sys.country).replace(" {%tempval%}",orgval.main.temp).replace("{%tempmax%}",orgval.main.temp_max).replace("{%tempmin%}",orgval.main.temp_max);
    // temperature = 
    console.log(orgval);
        return temperature;
        // temperature = tempval.replace("{%tempval%}".main.temp);


}

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=surat&appid=a0d6c4e3fe5fd9eaacf2d0898e444e34")
            .on('data',(chunk) => {
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
           
            // console.log(arrdata);
                const realtimedata = arrdata.map((val) =>  replaceval(homefile, val)).join("");
                res.write(realtimedata);
            })
            .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            //console.log('end');
            });
    }
})

server.listen(port,()=>{
    console.log(`listing port no ${port}`);
});
