import React from "react";
import AuthForm from "../../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/slices/usersSlice";
import { validateForm } from "../../utils/validation";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const allUsers = useSelector((state) => state.users.value.data) || [];
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    const userExists = allUsers.some((u) => u.email === formData.email);
    if (userExists) {
      setError("An account with this email already exists.");
      return;
    }
    const validationErrors = validateForm(formData, "signup");

    if (validationErrors.length > 0) {
      setError(validationErrors[0]);
      return;
    }

    dispatch(addUsers(formData));
    navigate("/login");
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
