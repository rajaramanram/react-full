const mongoose = require('mongoose'); 

const syncSchema = mongoose.Schema({
    latest_block_hash: String,
    latest_app_hash: String,
    latest_block_height: String,
    latest_block_time: String,
    catching_up: Boolean
})

module.exports= mongoose.model('sync_info',syncSchema)