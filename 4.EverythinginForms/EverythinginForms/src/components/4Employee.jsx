import React, { useState } from "react";

function Employee() {
  const [formData, setformData] = useState({
    name: "",
    department: "",
    salary: "",
    id: "",
  });
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      //Here you have to edit a particular employee if id matched with it and when editing its is should be same
      setEmployees(
        employees.map((emp) =>
          emp.id === editId ? { ...formData, id: editId } : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees([...employees, { ...formData, id: Date.now() }]);
    }
    setformData({
      name: "",
      department: "",
      salary: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleEdit = (emp) => {
    setformData(emp);
    setEditId(emp.id);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              id="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              name="salary"
              id="salary"
              value={formData.salary}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">{editId ? "Update" : "Submit"}</button>
        </form>

        <h1>Employee Table</h1>
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => handleEdit(emp)}>Edit</button>
                  <button onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employee;
