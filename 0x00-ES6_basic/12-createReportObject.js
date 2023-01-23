export default function createObject(employeesList) {
    return { allEmployees: { ...employeesList} };
}
