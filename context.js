const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function createInput({ type, className, placeholder, value, handleChange }) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

function createInputWithForm({ type, placeholder, value, setValue }) {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
}
