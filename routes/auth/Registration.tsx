import UserForm from "../../components/UserForm";

const Registration = () => {
  return (
    <main className="min-h-[calc(100dvh-65px)] flex items-center">
      <UserForm login={false} />
    </main>
  );
};

export default Registration;
