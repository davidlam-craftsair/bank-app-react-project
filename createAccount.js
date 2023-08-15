function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <BankSubmissionForm
      formName="Create Account"
      status={status}
      showSubmissionForm={show}
      submissionForm={<CreateForm setShow={setShow} />}
      submissionFormNotShown={<CreateMsg setShow={setShow} />}
    ></BankSubmissionForm>
  );
}

function CreateMsg() {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Add Another Account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handle() {
    console.log(name, email, password);
    ctx.users.push({ name, email, password });
    props.setShow(false); // set to dont show the create account form after submit
  }

  return (
    <>
      <label className="mb-1">Name</label>
      {createInputWithForm({
        type: "input",
        placeholder: "Enter name",
        value: name,
        setValue: setName,
      })}
      <label className="mb-1 mt-2">Email Address</label>
      {createInputWithForm({
        type: "input",
        placeholder: "Enter email",
        value: email,
        setValue: setEmail,
      })}
      <label className="mb-1 mt-2">Password</label>
      {createInputWithForm({
        type: "password",
        placeholder: "Enter password",
        value: password,
        setValue: setPassword,
      })}
      <button type="submit" className="btn btn-light mt-4" onClick={handle}>
        Create Account
      </button>
    </>
  );
}
