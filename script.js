//Get Directories and Callback
var getDirs = function(rootDir, cb) {
    fs.readdir(rootDir, function(err, files) { 
        var dirs = []; 
        for (var index = 0; index < files.length; ++index) { 
            var file = files[index]; 
            if (file[0] !== '.') { 
                var filePath = rootDir + '/' + file; 
                fs.stat(filePath, function(err, stat) {
                    if (stat.isDirectory()) { 
                        dirs.push(this.file); 
                    } 
                    if (files.length === (this.index + 1)) { 
                        return cb(dirs); 
                    } 
                }.bind({index: index, file: file})); 
            }
        }
    });
}

//Get Files in Folder
var getPost = function(dir) {

	const fs = require('fs');
	var posts = [];

	fs.readdirSync(dir).forEach(file => {
	  posts.push(file);
	});

	return posts;
}