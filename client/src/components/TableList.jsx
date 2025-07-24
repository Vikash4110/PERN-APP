import React from "react";

const clients = [
  {
    id: 1,
    name: "Vikash Bharal",
    email: "bharal224@gmail.com",
    job: "Developer",
    rate: "100",
    isactive: true,
  },
  {
    id: 2,
    name: "Rahul",
    email: "bharal@gmail.com",
    job: "Developer",
    rate: "100",
    isactive: true,
  },
  {
    id: 3,
    name: "Bharal",
    email: "bha224@gmail.com",
    job: "Developer",
    rate: "100",
    isactive: true,
  },
];

const TableList = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>rate</th>
          </tr>
        </thead>
        <tbody className="hover">
          {clients.map((client) => (
            <tr key={client.id}>
              <th>{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
