const fs = require ('fs');
const path = require('path');

module.exports = (directory, ext, callBack) => {
    ext = `.${ext}`;
    fs.readdir(directory, (err, list)=> {
        if (err) return callBack(err);
        const filtred = list.filter(file=> {
            return path.extname(file) === ext;
        })
        return callBack(null, filtred);
    })
}