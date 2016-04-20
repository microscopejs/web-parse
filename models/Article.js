import mongoose from 'mongoose';

var Article = mongoose.Schema({
    title: String,
	description: String
},{
	collection: 'Article'
});

export default mongoose.model('Article', Article);