// backend/routes/appointments.js
const express = require("express");
const router = express.Router();
const connection = require("../database");

// Get all appointments
router.get("/", (req, res) => {
  connection.query("SELECT * FROM appointments", (err, appointments) => {
    if (err) {
      res.status(500).json({ error: "Error fetching appointments" });
    } else {
      res.json(appointments);
    }
  });
});

// Get an appointment by ID
router.get("/:id", (req, res) => {
  const appointmentId = req.params.id;
  connection.query(
    "SELECT * FROM appointments WHERE id = ?",
    [appointmentId],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Error fetching appointment" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Appointment not found" });
        } else {
          res.json(results[0]);
        }
      }
    }
  );
});

// Add a new appointment
router.post("/", (req, res) => {
  const appointment = req.body;
  connection.query(
    "INSERT INTO appointments SET ?",
    [appointment],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error adding appointment" });
      } else {
        res.status(201).json({
          message: "Appointment added successfully",
          appointmentId: result.insertId,
        });
      }
    }
  );
});

// Update an appointment
router.put("/:id", (req, res) => {
  const appointmentId = req.params.id;
  const appointmentData = req.body;

  connection.query(
    "UPDATE appointments SET ? WHERE id = ?",
    [appointmentData, appointmentId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error updating appointment" });
      } else {
        res.json({ message: "Appointment updated successfully" });
      }
    }
  );
});

// Delete an appointment
router.delete("/:id", (req, res) => {
  const appointmentId = req.params.id;
  connection.query(
    "DELETE FROM appointments WHERE id = ?",
    [appointmentId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error deleting appointment" });
      } else {
        res.json({ message: "Appointment deleted successfully" });
      }
    }
  );
});

module.exports = router;
