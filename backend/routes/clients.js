// backend/routes/clients.js
const express = require("express");
const router = express.Router();
const connection = require("../database");

// Get all clients
router.get("/", (req, res) => {
  connection.query("SELECT * FROM clients", (err, clients) => {
    if (err) {
      res.status(500).json({ error: "Error fetching clients" });
    } else {
      res.json(clients);
    }
  });
});

// Get a client by ID
router.get("/:id", (req, res) => {
  const clientId = req.params.id;
  connection.query(
    "SELECT * FROM clients WHERE id = ?",
    [clientId],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Error fetching client" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Client not found" });
        } else {
          res.json(results[0]);
        }
      }
    }
  );
});

// Add a new client
router.post("/", (req, res) => {
  const client = req.body;
  connection.query("INSERT INTO clients SET ?", [client], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error adding client" });
    } else {
      res.status(201).json({
        message: "Client added successfully",
        clientId: result.insertId,
      });
    }
  });
});

// Update a client
router.put("/:id", (req, res) => {
  const clientId = req.params.id;
  const clientData = req.body;

  connection.query(
    "UPDATE clients SET ? WHERE id = ?",
    [clientData, clientId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error updating client" });
      } else {
        res.json({ message: "Client updated successfully" });
      }
    }
  );
});

// Delete a client
router.delete("/:id", (req, res) => {
  const clientId = req.params.id;
  connection.query(
    "DELETE FROM clients WHERE id = ?",
    [clientId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error deleting client" });
      } else {
        res.json({ message: "Client deleted successfully" });
      }
    }
  );
});

module.exports = router;
