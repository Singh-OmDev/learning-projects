const Gig = require("../models/Gig");

// CREATE GIG
exports.createGig = async (req, res) => {
  try {
    const { title, description, budget } = req.body;

    const gig = await Gig.create({
      title,
      description,
      budget,
      ownerId: req.user.id
    });

    res.status(201).json(gig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL OPEN GIGS (with search)
exports.getAllGigs = async (req, res) => {
  try {
    const searchQuery = req.query.search || "";

    const gigs = await Gig.find({
      status: "open",
      title: { $regex: searchQuery, $options: "i" }
    }).populate("ownerId", "name email");

    res.json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};