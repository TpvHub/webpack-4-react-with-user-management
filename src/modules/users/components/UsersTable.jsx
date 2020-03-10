import React from "react";
import PropTypes from "prop-types";

import UsersContext from "../context/UsersContext";

import "./UsersTable.scss";

function UsersTable(props) {
  const { byId, allIds, onAddRecord } = React.useContext(UsersContext);

  return (
    <div>
      <div className="add-record">
        <button onClick={onAddRecord}>Add record</button>
      </div>
      <div className="users-table">
        <h4 className="title">Users</h4>
        <table id="users">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allIds.map(id => (
              <tr key={id} >
                <td>{byId[id].name}</td>
                <td>{byId[id].email}</td>
                <td>{byId[id].phone}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

UsersTable.propTypes = {};

UsersTable.defaultProps = {};

export default UsersTable;
