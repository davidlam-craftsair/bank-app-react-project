function Card(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? "text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <h7 className="card-text">{props.text}</h7>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
function MainPageHolder(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? "text-" + props.txtcolor : " text-black";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body bg-white">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <h7 className="card-text">{props.text}</h7>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

function BankPageHolder(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    return "card mb-3 " + "text-" + bg;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <h5 className="card-text">{props.text}</h5>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

function BankSubmissionForm(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : "bg-primary";
    const txt = props.txtcolor ? "text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.formName}</div>
      <div className="card-body">
        {props.label && <h5 className="card-title">{props.title}</h5>}
        {props.text && <h7 className="card-text">{props.text}</h7>}
        {props.showSubmissionForm
          ? props.submissionForm
          : props.submissionFormNotShown}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
