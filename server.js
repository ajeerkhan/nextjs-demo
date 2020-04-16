const express = require("express");
const next = require("next");

const dev = process.env.NODE_MODE !== 'production';
const port = 3100;

const app = next({dev});
const nextHander = app.getRequestHandler();

app.prepare().then(
()=>{

    const expServer = express();
    //routes
    expServer.get("/*",(req,res)=>{
        return nextHander(req,res);
    });

    expServer.listen(port, (err)=>{
        if(err)
          throw err;

     console.log(`Server ready at http://localhost:${port}/`)     
    });


}

);

