const fs = require('fs');
const path = require('path');

const ABSENCES_PATH = path.join(__dirname, 'json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .catch(err => err)

const getMembers = ( params = {} ) => readJsonFile(MEMBERS_PATH).then((data) => JSON.parse(data))
.then((data) => {
  if(params.userId){
    let id = parseInt(params.userId);
    return data.payload.filter(data => data.userId === id)
  }
  return data.payload
});
const getAbsences = (params={}) => readJsonFile(ABSENCES_PATH).then((data) => JSON.parse(data))
.then((data) => {
  if(params.userId !== undefined  && !params.startDate && !params.endDate){
    let id = parseInt(params.userId);
    return data.payload.filter(data => data.userId === id)
  }
  if( params.startDate !== undefined && params.endDate !== undefined ){
    var startDateUpdated = new Date(params.startDate).getTime();  
    var endDateUpdated = new Date(params.endDate).getTime();
    return data.payload.filter(data => {
      let startDate = new Date(data.startDate).getTime();
      let endDate = new Date(data.endDate).getTime();
        if(startDate>=startDateUpdated && endDate<=endDateUpdated){
          return true;
        }
        return false;
     })
  }
  return data.payload
});

exports.getMembers = getMembers;
exports.getAbsences = getAbsences;

