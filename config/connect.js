const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/miniproject1')
.then(
    ()=>{
        console.log('connect to data base');
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
)

module.exports=mongoose