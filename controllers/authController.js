const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate email & password
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Please provide username and password' });
    }

    // Check for user
    const admin = await Admin.findOne({ username }).select('+password');

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secret123', {
      expiresIn: '30d'
    });

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Update admin credentials
// @route   PUT /api/auth/update-credentials
// @access  Private
exports.updateCredentials = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findById(req.admin.id);

    if (username) admin.username = username;
    if (password) admin.password = password;

    await admin.save();

    res.status(200).json({
      success: true,
      message: 'Credentials updated successfully',
      admin: {
        id: admin._id,
        username: admin.username,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);
    res.status(200).json({
      success: true,
      admin
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
