const { response } = require('express');

const getEvents = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'getEventos',
  });
};

const createEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'crear evento',
  });
};

const updateEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'update evento',
  });
};

const deleteEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'delete evento',
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
