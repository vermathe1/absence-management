const api = require("../lib/api");
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
exports.getLeaveDetails = getLeaveDetails;
