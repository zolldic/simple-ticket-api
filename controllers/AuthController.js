import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'


const authController = {
  async Login(req, res) {
    try {
      const { username, password } = req.body;
      
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed'})
      }
      
      const passwd = await bcrypt.compare(password, user.password);
      if (!passwd) {
        return res.status(401).json({ error: 'Authentication failed'})
      }

      const token = jwt.sign({ userId: user._id}, process.env.SECRET, { expiresIn: '1h' });  
      // save the token in the client-side
      res.status(200).json({ token })
    } catch (error) {  
      console.log(error)
      res.status(500).json({ error: `Login failed`});

    }
  },

  async Registar(req, res) {
    try {
      const { username, password } = req.body;
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
      res.status(500).json({ error: `${error.message}`});
    }
  },
};

export default authController;
