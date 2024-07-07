
// up to Clound
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier') 

cloudinary.config({ 
    cloud_name:  process.env.CLOUND_NAME, 
    api_key:     process.env.API_KEY , 
    api_secret:  process.env.API_SECRET
});
// end up to Clound 

module.exports.upLoad=(req, res, next)=> {
    if(req.file){
        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                  (error, result) => {
                    if (result) {
                      resolve(result);
                    } else {
                      reject(error);
                    }
                  }
                );
    
              streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
    
        async function upload(req) {
            let result = await streamUpload(req);
               req.body.thumbnail=result.url
               next();
        }
        upload(req);
    }else{
        next();
    }


}