const { addNoteHandler } = require('./handler');

const route = [
  {
    method: 'GET',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = route;
