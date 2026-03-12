import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";

const Login = () => {
  const token = useSelector((state) => state.auth.value.token);
  const allUsers = useSelector((state) => state.users.value.data) || [];
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = allUsers.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (user) {
      const dummyToken = "dummy-token";
      dispatch(loginSuccess({ ...user, token: dummyToken }));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-6 text-2xl ">Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <AuthForm
            formData={formData}
            setFormData={setFormData}
            type="login"
          />
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 cursor-pointer">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
