const api = require("../lib/api");

// const getLeaveDetails = () => {
//   return api.getMembers()
//   .then(data => data
//     )
//   .catch(err => err);
// }

const getCombinedResult = (members, absenties) => {
   return absenties.reduce((acc, absentInfo) => {
		let userdetails = members.filter(mem => mem.userId === absentInfo.userId);
		if(!(acc[userdetails[0].userId] && acc[userdetails[0].userId]['leaves'])){
			acc[(userdetails[0].userId)] = {
				leaves : []
			}
		}
			acc[userdetails[0].userId] = {
				info: userdetails[0],
				leaves : [...acc[userdetails[0].userId].leaves,absentInfo]
			}
			return acc;
	}, {});
};

const getLeaveDetails = () => {
	return Promise.all([api.getMembers(), api.getAbsences()])
	.then(([members, leaves]) =>  getCombinedResult(members, leaves))
	.catch(err => err)
};
exports.getLeaveDetails = getLeaveDetails;
