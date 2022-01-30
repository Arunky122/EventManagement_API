const Event = require("../models/eventSchema");
const Moment = require("moment");

async function saveEvent(body) {
  const { eventName, startTime, duration } = body;
  const unixTimeStamp = Math.floor(new Date(startTime).getTime() / 1000);
  console.log(unixTimeStamp);

  console.log(body);
  const event = new Event({
    eventName,
    startTime,
    unixTimeStamp,
    duration,
  });
  const data = await event.save();
  console.log(data);
  return data;
}
async function getAllData() {
  const data = await Event.find();
  return data;
}

async function getUpcomingEvents() {
  const currentTimeStamp = Math.floor(new Date().getTime() / 1000) + 600000;
  // console.log(currentDate);

  const data = await Event.find({ unixTimeStamp: { $gt: currentTimeStamp } });
  console.log(data);
  return data;
}

async function getLiveEvents() {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const nextTenTimestamp = Math.floor(new Date().getTime() / 1000) + 60000;

  const data = await Event.find({ unixTimeStamp: { $gt: currentTime, $lt: nextTenTimestamp } });
  console.log(data);
  return data;
}

module.exports = { saveEvent, getAllData, getUpcomingEvents, getLiveEvents };
