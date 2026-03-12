export const validateForm = (data, type) => {
  const errors = [];

  if (type === "signup" && !data.name?.trim()) {
    errors.push("Name is required");
  }

  if (!data.email) {
    errors.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.push("Email is invalid");
  }

  if (!data.password) {
    errors.push("Password is required");
  } else if (data.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  return errors;
};