const NotFound = () => {
  return (
    <main className="min-h-dvh text-center flex items-center flex-col justify-center">
      <img
        src="/assets/error-404.webp"
        alt="Not Found Image"
        className="mx-auto max-w-xs"
      />
      <h1 className="text-4xl font-bold max-w-md mx-auto my-5 text-blue-950">
        The page you're looking for cannot be found!
      </h1>
      <button className="btn btn-lg btn-success">Back to Homepage</button>
    </main>
  );
};

export default NotFound;
