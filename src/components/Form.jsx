import React, { useState } from "react";
import { Table } from "react-bootstrap";

function Form() {
  const [userPatient, setuserPatient] = useState({
    patient: "",
    symptom: "",
    consultant: "",
    phone: "",
    cost: "",
  });
  let i = 1;
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserPatient({ ...userPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { ...userPatient, id: new Date().getTime().toString() };
    setRecords([...records, newUser]);
    console.log(records);

    setuserPatient({
      patient: "",
      symptom: "",
      consultant: "",
      phone: "",
      cost: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patient" id="box">
            Patient Name
          </label>
          <input
            type="text"
            value={userPatient.patient}
            onChange={handleInput}
            name="patient"
            id="patient"
          />
        </div>

        <div>
          <label htmlFor="symptom" id="box">
            Symptoms
          </label>
          <input
            type="text"
            value={userPatient.symptom}
            onChange={handleInput}
            name="symptom"
            id="symptom"
          />
        </div>

        <div>
          <label htmlFor="doctor" id="box">
            Consultant
          </label>
          <select
            id="doctor"
            value={userPatient.consultant}
            onClick={handleInput}
            name="doctor"
          >
            <option value="arora">Dr. Arora Ravindra Singh</option>
            <option value="sunil">Dr. Arora Sunil</option>
            <option value="rajeev">Dr. Bagarahatta Rajeev</option>
            <option value="asha">Dr.Bansal Asha</option>
          </select>
        </div>

        <div>
          <label htmlFor="phone" id="box">
            Phone
          </label>
          <input
            type="text"
            value={userPatient.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>

        <div>
          <label htmlFor="cost" id="box">
            Cost
          </label>
          <input
            type="text"
            value={userPatient.cost}
            onChange={handleInput}
            name="cost"
            id="cost"
          />
        </div>

        <button type="submit">Register Patient</button>
      </form>

      <h1>Patient Registrtion List</h1>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Number</th>
              <th>Patient Name</th>
              <th>Symptom</th>
              <th>Consultant</th>
              <th>Phone</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {records.map((e) => (
              <tr>
                <td>{i++}</td>
                <td>{e.patient}</td>
                <td>{e.symptom}</td>
                <td>Dr. {e.doctor}</td>
                <td>{e.phone}</td>
                <td>{e.cost}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Form;

// return (
//   <div style={{ display: "flex", justifyContent: "center" }}>
//     <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Patient Name</th>
//           <th>Symptom</th>
//           <th>Consultant</th>
//           <th>Phone</th>
//           <th>Fees</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//       </tbody>
//     </Table>
//   </div>
// );

// {
//   records.map((e) => {});
// }
