function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="self-center py-12 text-xl text-center">
        Please{" "}
        <a href="/api/auth/signin" className="underline text-accent-500">
          login
        </a>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
