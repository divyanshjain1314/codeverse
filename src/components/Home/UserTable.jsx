import React from "react";

const UserTable = ({ users }) => {
  return (
    <div className="mt-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Registered Users
        </h2>
        <p className="text-sm text-gray-500">
          A list of all users excluding your own account.
        </p>
      </div>

      <div className="overflow-hidden bg-white shadow-md sm:rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Email Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{user.email}</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  className="px-6 py-10 text-center text-sm text-gray-500 italic"
                >
                  No users matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
