function Home() {
  return (
    <MainPageHolder
      bgcolor="secondary"
      txtcolor="black"
      header="Bad Bank Landing Module"
      label="Welcome Bad Bank"
      text="You can move around using the navigation bar."
      status=""
      body={
        <img
          src="./assets/bank_logo.png"
          className="img-fluid"
          maxHeight="300px"
        ></img>
      }
    ></MainPageHolder>
  );
}
