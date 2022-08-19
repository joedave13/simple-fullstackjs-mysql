import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sin, setSin] = useState('');
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  useEffect(() => {
    getStudentById();
  }, []);

  const getStudentById = async () => {
    const response = await axios.get(`http://localhost:5000/students/${id}`);
    const student = response.data;
    setName(student.name);
    setEmail(student.email);
    setSin(student.sin);
    setGender(student.gender);
  };

  const updateStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/students/${id}`, {
        name,
        email,
        sin,
        gender,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-6 ml-3">
      <div className="column is-half">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">Edit Student</p>
          </div>
          <div className="card-content">
            <Link to="/" className="button is-danger is-small mb-3">
              Back
            </Link>

            <form onSubmit={updateStudent} autoComplete="off">
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="sin" className="label">
                  Student Identification Number
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Student Identification Number"
                    value={sin}
                    onChange={(e) => setSin(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="gender" className="label">
                  Gender
                </label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" hidden>
                        - Choose Gender -
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <button
                  type="submit"
                  className="button is-warning is-fullwidth"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
