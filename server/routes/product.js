const express = require('express');
const multer = require('multer');
const router = express.Router();

//=================================
//             product
//=================================

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

var upload = multer({storage: storage});

router.post('/image', (req, res) =>{

    upload(req, res, err => {
        if(err){
            return req.json({success: false, err})
        }
        return res.json({success: true, filePath:res.req.file.path, fileName:res.req.file.fieldname})
    })
})


module.exports = router;
