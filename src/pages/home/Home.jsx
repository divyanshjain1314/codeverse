import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import UserTable from "../../components/Home/UserTable";

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const allUsers = useSelector((state) => state.users?.value?.data) || [];
  const auth = useSelector((state) => state.auth?.value);
  const users = allUsers?.filter((user) => user.email !== auth.email);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  
  return (
    <>
      <NavBar />
      <div className="px-5">
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-3xl font-bold ">Welcome, {auth.name}!</h1>
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <UserTable users={filteredUsers} />
      </div>
    </>
  );
};

export default Home;
