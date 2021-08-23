const customErrorHandler = (err,req,res,next)=>{
    console.log(err);

    res.status(400).json({"error":"Hata oluştu"})
}
module.exports= customErrorHandler