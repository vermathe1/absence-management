const fs = require('fs');
const path = require('path');

const ABSENCES_PATH = path.join(__dirname, 'json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data) => JSON.parse(data))
  .then((data) => data.payload)
  .catch(err => err)

const getMembers = () => readJsonFile(MEMBERS_PATH);
const getAbsences = () => readJsonFile(ABSENCES_PATH);

exports.getMembers = getMembers;
exports.getAbsences = getAbsences;

