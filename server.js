const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static',express.static(__dirname + '/static'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/counties',(req,res)=>{
    res.sendFile(path.join(__dirname + '/counties.html'));
})

app.get('/capital',(req,res)=>{
    res.sendFile(path.join(__dirname + '/capital.html'));
})

app.get('/get-counties',(req,res)=>{
    fs.readFile('county.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        let all_counties = JSON.parse(data);

        res.send(JSON.stringify(all_counties));
        
    })
})

app.listen(3000, ()=>{
    console.log('My server is listening to port 3000')
})
