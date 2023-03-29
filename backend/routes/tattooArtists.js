// backend/routes/tattooArtists.js
const express = require("express");
const router = express.Router();
const connection = require("../database");

// Get all tattoo artists
router.get("/", (req, res) => {
  connection.query("SELECT * FROM tattoo_artists", (err, tattooArtists) => {
    if (err) {
      res.status(500).json({ error: "Error fetching tattoo artists" });
    } else {
      res.json(tattooArtists);
    }
  });
});

// Get a tattoo artist by ID
router.get("/:id", (req, res) => {
  const tattooArtistId = req.params.id;
  connection.query(
    "SELECT * FROM tattoo_artists WHERE id = ?",
    [tattooArtistId],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Error fetching tattoo artist" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Tattoo artist not found" });
        } else {
          res.json(results[0]);
        }
      }
    }
  );
});

// Add a new tattoo artist
router.post("/", (req, res) => {
  const tattooArtist = req.body;
  connection.query(
    "INSERT INTO tattoo_artists SET ?",
    [tattooArtist],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error adding tattoo artist" });
      } else {
        res.status(201).json({
          message: "Tattoo artist added successfully",
          tattooArtistId: result.insertId,
        });
      }
    }
  );
});

// Update a tattoo artist
router.put("/:id", (req, res) => {
  const tattooArtistId = req.params.id;
  const tattooArtistData = req.body;

  connection.query(
    "UPDATE tattoo_artists SET ? WHERE id = ?",
    [tattooArtistData, tattooArtistId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error updating tattoo artist" });
      } else {
        res.json({ message: "Tattoo artist updated successfully" });
      }
    }
  );
});

// Delete a tattoo artist
router.delete("/:id", (req, res) => {
  const tattooArtistId = req.params.id;
  connection.query(
    "DELETE FROM tattoo_artists WHERE id = ?",
    [tattooArtistId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error deleting tattoo artist" });
      } else {
        res.json({ message: "Tattoo artist deleted successfully" });
      }
    }
  );
});

module.exports = router;
