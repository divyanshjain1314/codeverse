import React from "react";

const UserTable = ({ users }) => {
  return (
    <div className="mt-8">
      <table className="min-w-full border-collapse border border-gray-200 rounded-2xl overflow-hidden">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={index+1}>
              <td className="border border-gray-200 px-4 py-2">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td
                colSpan="2"
                className="border border-gray-200 px-4 py-2 text-center"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
