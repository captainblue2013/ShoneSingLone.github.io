const fs = require('fs');
const path = require('path');
let lessList = fs.readdirSync(path.resolve(__dirname))
lessList.forEach(item => {
    fs.renameSync(item, item.replace('less', 'scss'));
});