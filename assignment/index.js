const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/info",{useNewUrlParser:true,userUnifiedTopology:true}).then(()=>{
//     console.log("Connected to Mongodb Successfully");
// }).catch((err) =>{
//     console.log(err)
// })

mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(process.env.PORT, () => {
    console.log(`server is running`);
})