const express = require("express");
const router = express.Router();
const {
  saveEvent,
  getAllData,
  getUpcomingEvents,
  getLiveEvents,
} = require("../controller/eventController");

// ROUTE FOR CREATING EVENTS IN DB.
router.post("/create-events", async (req, res) => {
  try {
    const data = await saveEvent(req.body);
    console.log(data, "In router");
    res.send(res.json({ statusCode: 200, data, message: "Event Created Successfully" }));
  } catch {
    (err) => {
      console.log(err);
      res.json({ message: err });
    };
  }
});
// ROUTE FOR FETCH ALL EVENTS FROM THE DB
router.get("/get-all-events", async (req, res) => {
  try {
    const data = await getAllData();
    res.send({ statusCode: 200, data: data, message: "Data fetched Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});
// ROUTE FOR FETCHING UPCOMING EVENTS FORM THE DB
router.get("/upcoming-events", async (req, res) => {
  try {
    const data = await getUpcomingEvents();
    res.send({ statusCode: 200, data, message: "Data fetched Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

//ROUTE FOR FETCHING THE LIVE EVENTS FROM THE DATABASE.
router.get("/live-events", async (req, res) => {
  try {
    const data = await getLiveEvents();
    res.send({ statusCode: 200, data, message: "Data fetched Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
