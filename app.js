const  express = require("express")

const App = express()

const port = 3001 ;

App.listen(()=>{
    console.log(`Testing At port  ${port}`)
})

