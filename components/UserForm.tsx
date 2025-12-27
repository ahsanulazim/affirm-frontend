const UserForm = ({ login }: { login: boolean }) => {
  return (
    <form className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4 mx-auto">
      <h1 className="text-2xl font-bold">{login ? "Login" : "Registration"}</h1>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Login</button>
    </form>
  );
};

export default UserForm;
