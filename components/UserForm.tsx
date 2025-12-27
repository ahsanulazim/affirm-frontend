import { SubmitHandler, useForm } from "react-hook-form";
import { LuKey, LuMail } from "react-icons/lu";
import { Link } from "react-router";

type Input = {
  email: string;
  password: string;
};

const UserForm = ({ login }: { login: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const handleForm: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-base-200 border-base-300 rounded-box max-w-xs w-full border p-4 mx-auto">
      <form className="fieldset" onSubmit={handleSubmit(handleForm)}>
        <h1 className="text-2xl font-bold text-center">
          {login ? "User Login" : "User Register"}
        </h1>

        <label className="label">Email</label>
        <label className="input">
          <LuMail className="opacity-50" />
          <input
            type="email"
            placeholder="mail@site.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
        </label>
        {errors.email && (
          <p className="text-sm text-error">{errors.email.message}</p>
        )}
        <label className="label">Password</label>
        <label className="input">
          <LuKey className="opacity-50" />
          <input
            type="password"
            placeholder="Password"
            minLength={8}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="text-sm text-error">{errors.password.message}</p>
        )}
        {login && (
          <Link to="#" className="link link-info link-hover">
            Forgot Password?
          </Link>
        )}
        <button type="submit" className="btn btn-success mt-3">
          {login ? "Login" : "Register"}
        </button>
      </form>
      <p className="text-sm">
        {login ? (
          <>
            Don't have an account?{" "}
            <Link className="link link-hover link-info" to="/registration">
              Register here
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link className="link link-hover link-info" to="/login">
              Login here
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default UserForm;
