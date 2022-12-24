const express = require('express');
const app = express()
const { faker } = require('@faker-js/faker');

const randomName = faker.lorem.lines()



app.get('/tbbt/api', (req, res) => {  
    res.json({
        'characters': ['Sheldon Cooper', 'Leonard Hoftstader', 'Penny Hoftstader', 'Howard Wollowitz', "Rajesh Koothrapaly"],
        'title': randomName
  } 
)
});

app.get('/tbbt/:id', (req, res)=> {
        let character = req.params.id

        res.json({
            character : `string`
        })
})


app.get('/courses', (req, res) => {
    res.sendFile('courses.html', {root: __dirname});  
})




var server = app.listen('3000', ()=> {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
