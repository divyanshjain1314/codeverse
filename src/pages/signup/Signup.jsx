import React from "react";
import AuthForm from "../../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/slices/usersSlice";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      dispatch(addUsers(formData));
      navigate("/login");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-6 text-2xl ">Signup</h2>
        <form onSubmit={handleSignup}>
          {error && <p className="text-red-500">{error}</p>}
          <AuthForm
            formData={formData}
            setFormData={setFormData}
            type="signup"
          />

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
