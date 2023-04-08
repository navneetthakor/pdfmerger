const express = require('express');
const path = require('path');
const multer  = require('multer');
const mergepdf = require('../merge.js');

// const app = express();
const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../view/html/index.html"));
})



router.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    let d = await mergepdf(path.join(__dirname,"../",req.files[0].path),path.join(__dirname,"../",req.files[1].path))
    res.redirect(`http://localhost:3000/merged${d}.pdf`);
  })
module.exports = router;