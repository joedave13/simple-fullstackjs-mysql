import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    const response = await axios.get('http://localhost:5000/students');
    setStudents(response.data);
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      getStudent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <Link to="/create" className="button is-success is-small mb-3">
                Create
              </Link>
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>SIN</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.sin}</td>
                      <td>{student.gender}</td>
                      <td>
                        <Link
                          to={`edit/${student.id}`}
                          className="button is-small is-warning"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="button is-small is-danger ml-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
