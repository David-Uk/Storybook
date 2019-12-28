const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const passport = require('passport');
require('./config/passport')(passport);

const app = express();

mongoose.connect('mongodb+srv://scottadkins:TyRQvprolKjZyRVQ@cluster0-smlfc.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true })
	.then(() => {
		console.log('MongoDB connected!');
	});

app.use('/auth', auth);

app.get('/', (req, res) => {
	res.send('Storybook');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on ${port}`);
})