import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'
import dotenv from 'dotenv'
import cloudinaryFramework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || 'https://home-grown-green.herokuapp.com'// ??
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Image uploading set up
const cloudinary = cloudinaryFramework.v2;
cloudinary.config({
  cloud_name: 'dnjk2bwkp',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'plants',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})
const parser = multer({ storage })

//Models
const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    /*  required: true, */
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});

const Plant = mongoose.model('Plant', {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageId: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
  } //other example has no mongoose. just Schema...
})



//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header('Authorization'),
    });

    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ loggedOut: true, message: 'Please try logging in again' })
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: 'Access token is missing or wrong', errors: err });
  }
}

// Start routes here
app.get('/', (req, res) => {
  res.send('Hello Happy World')
})

// Create user  - sign up
app.post('/users', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = new User({ email, name, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    // Not the entire user (we don't want to send password in the response)
    res.status(201).json({ name: saved.name, userId: saved._id, accessToken: saved.accessToken });
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err });
  }
})

// Secure endpoint, user needs to be logged in to access this.
app.get('/users/:id', authenticateUser);
app.get('/users/:id', (req, res) => {
  const profileMessage = `${req.user.name}`;// put users plants in here
  // Compile information that is access protected
  // And send it back to the client to use for that specific user
  //  const user = await User.findOne({ user._id});
  res.status(201).json({ profileMessage });
})

// login user
app.post('/sessions', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await User.findOne({ name });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ userId: user._id, accessToken: user.accessToken });//result att skicka till frontend
    } else {
      res.status(404).json({ notFound: true });
    }
  } catch (err) {
    res.status(404).json({ notFound: true });
  }
})

// post new plant, upload image
app.post('/plants', parser.single('image'), async (req, res) => {
  try {
    const plant = await new Plant({
      title: req.body.title,
      description: req.body.description,
      email: req.body.email,
      imageUrl: req.file.path,
      imageId: req.file.filename
    }).save()
    res.json(plant)
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

//get ONE plant
app.get("/plants/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
    if (plant) {
      res.status(200).json(plant)
    } else {
      res.status(404).json({ error: `Cant find plant with id:${id} did you miss a nr?` })
    }
  } catch (err) {
    res.status(400).json({ error: `try another plant` })
  }
})
// get all the plants
app.get("/plants", async (req, res) => {
  const plants = await Plant.find()/* .limit(20) */
  res.json(plants)
})

app.get("/user/:id/plants", async (req, res) => {
  const plants = await Plant.find()
  res.json(plants)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
