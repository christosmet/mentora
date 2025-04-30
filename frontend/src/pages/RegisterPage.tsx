import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthFormWrapper from "../components/AuthFormWrapper";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    is_mentor: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Ελέγχουμε αν τα passwords ταιριάζουν
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Στέλνουμε τα δεδομένα στο backend
      await axios.post("http://127.0.0.1:8000/api/users/register/", {
        email: formData.email,
        password: formData.password,
        is_mentor: formData.is_mentor,
        confirm_password: formData.confirmPassword,
      });
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.detail || "Registration failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <AuthFormWrapper title="Register">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_mentor"
            checked={formData.is_mentor}
            onChange={handleChange}
          />
          Register as Mentor
        </label>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Register
        </button>

        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </AuthFormWrapper>
  );
};

export default RegisterPage;
