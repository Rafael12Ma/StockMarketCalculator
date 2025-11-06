export default function Login({ usernameRef, passwordRef, handleLogin }) {
  return (
    <>
      <form onSubmit={handleLogin} className="center">
        <p>
          <label htmlFor="">Username</label>
          <input ref={usernameRef} type="text" />
        </p>

        <p>
          <label htmlFor="">Password</label>
          <input ref={passwordRef} type="password" />
        </p>
        <p>
          <button>Login</button>
        </p>
      </form>
    </>
  );
}
