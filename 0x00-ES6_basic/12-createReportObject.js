export default function createReportOject(employeesList) {
	return {
		allEmployees: {...employeesList},
		getNumberOfDepartments(employees) {
			return Object.keys(employees).length;
		},
	};
}
