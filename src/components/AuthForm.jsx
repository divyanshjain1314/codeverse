import React from "react";

const AuthForm = ({ formData, setFormData, type }) => {
  const [passType, setPassType] = React.useState("password");
  return (
    <>
      {type === "signup" && (
        <div className="mb-4">
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-4 ">
        <label className="block mb-1 text-sm">Password</label>
        <div className="relative">
          <input
            type={passType}
            required
            className="w-full p-2 border rounded "
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {/* eye icon */}
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500"
            onClick={() =>
              setPassType(passType === "password" ? "text" : "password")
            }
          >
            {passType === "password" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3C5.454 3 1.73 5.11 0 10c1.73 4.89 5.454 7 10 7s8.27-2.11 10-7c-1.73-4.89-5.454-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded"
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </>
  );
};

export default AuthForm;
