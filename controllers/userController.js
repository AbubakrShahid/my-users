const getUserById = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve user',
      details:
        process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

module.exports = { getUserById };
