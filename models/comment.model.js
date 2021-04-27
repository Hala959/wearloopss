
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({

    reply:{
        type: String
      }, 
    
},
    {timestamp: true}
  
);


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;