import UserForm from "../../components/UserForm";

const Login = () => {
  return (
    <main className="min-h-[calc(100dvh-65px)] flex items-center">
      <UserForm login={true} />
    </main>
  );
};

export default Login;
