import express from 'express';
const app = express();
import mongoose from 'mongoose';
import Listing1 from './models/pub_listing.js';
import Listing2 from './models/pri_listing.js';
import path from 'path';
import methodOverride from 'method-override';
import ejsMate from 'ejs-mate';
import pubData from './init/pub_data.js'; // Import your data

app.engine('ejs',ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(process.cwd(), 'public')));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/zenxuary');
    console.log('Connected to MongoDB');
}
main()
    .then(() => console.log('MongoDB connection established'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

await Listing1.insertMany(pubData.data);
console.log("Seeded pub_Listing from pub_data.js!");

app.get('/home', async (req, res) => {
    // Fetch one document from pub_Listing
    const pub_Listing = await Listing1.findOne(); // You can add filters if needed
    res.render('listings/index.ejs', { pub_Listing, currentPath: req.path });
});

app.get('/explore', async (req, res) => {
    res.render('listings/explore.ejs', { currentPath: req.path });
});

app.get('/create', async (req, res) => {
    res.render('listings/create.ejs', { currentPath: req.path });
});

app.get('/messages', async (req, res) => {
    res.render('listings/messages.ejs', { currentPath: req.path });
});

app.get('/profile', async (req, res) => {
    res.render('listings/my_profile.ejs', { currentPath: req.path });
});

app.get('/notification', async (req, res) => {
    res.render('listings/notification.ejs', { currentPath: req.path });
});

app.get('/settings', async (req, res) => {
    res.render('listings/settings.ejs', { currentPath: req.path });
});

app.get('/you', async (req, res) => {
    res.render('listings/you.ejs', { currentPath: req.path });
});

app.get('/bussiness_profile', async (req, res) => {
    res.render('listings/busi_profile.ejs', { currentPath: req.path });
});

app.get('/interests', async (req, res) => {
    res.render('listings/interests.ejs', { currentPath: req.path });
});

app.get('/profile_main/:section', (req, res) => {
    const section = req.params.section;
    const allowed = ['description', 'showcase', 'market', 'jobs', 'contact'];
    if (!allowed.includes(section)) return res.status(404).send('Not found');
    res.render(`listings/profile_main/${section}`, { layout: false });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});