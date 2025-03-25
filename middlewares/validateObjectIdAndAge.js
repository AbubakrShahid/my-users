const { isValidObjectId } = require('mongoose');
const User = require('../models/User');

const validateObjectIdAndAge = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gte: 22 } }).lean();

    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not found or does not meet age requirement' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error('Error validating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = validateObjectIdAndAge;
