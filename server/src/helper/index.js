const ics = require('ics')
const api = require("../lib/api");
let moment = require("moment")
const { writeFileSync, unlink } = require('fs')

const getEvents = async() => {
  const events = await getLeaveDetails();
  return events.map(event => {
    let customCalendarEvent = {}
    customCalendarEvent.start = moment(event.startDate).format('YYYY-M-D').split("-");
    customCalendarEvent.end = moment(event.endDate).format('YYYY-M-D').split("-");
    customCalendarEvent.title = `${event.name} - userid: ${event.userId} - ${event.type}`;
    customCalendarEvent.description = event.memberNote;
    customCalendarEvent.organizer = {name:event.name}
    return customCalendarEvent;
  })
}


const getCombinedResult = (members, absenties) => {
  return absenties.reduce((acc, absentInfo) => {
    let userdetails = members.filter((mem) => mem.userId === absentInfo.userId);
    absentInfo.name = userdetails[0].name;
    acc.push(absentInfo);
    return acc;
  }, []);
};

const getLeaveDetails = () => {
  return Promise.all([api.getMembers(), api.getAbsences()])
    .then(([members, leaves]) => getCombinedResult(members, leaves))
    .catch((err) => err);
};

const generateICSFile = async () => {
  const events = await getEvents();
  return new Promise((resolve,reject) => {
    try{
      ics.createEvents(events, (error, value) => {
        if (error) {
          throw new Error
          return
        }
        
        resolve(value);
      })
    }
    catch(error){
      reject(error)
    }
  })
}
const downlaodFile = (value,res) => {
  return new Promise(( resole, reject )=>{
    writeFileSync(`${__dirname}/event.ics`, value);
    const filePath = `${__dirname}/event.ics`;
    res.download(filePath,'event.ics',function(err) {
      if (err) {
        reject("Issue in downloading file");
      }
      unlink(filePath, function(){
        console.log("File was deleted") 
      });
    });
  })
}

exports.getLeaveDetails = getLeaveDetails;
exports.generateICSFile = generateICSFile;
exports.downlaodFile = downlaodFile;