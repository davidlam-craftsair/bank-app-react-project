// const HashRouter = ReactRouterDOM.HashRouter;
// const Route = ReactRouterDOM.Route;

function Spa() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "david",
                email: "david@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/createaccount/" component={CreateAccount}></Route>
            <Route path="/login/" exact component={Login}></Route>
            <Route path="/deposit/" component={Deposit}></Route>
            <Route path="/withdraw/" component={Withdraw}></Route>
            <Route path="/showbalance/" component={ShowBalance}></Route>
            <Route path="/alldata/" component={AllData}></Route>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spa />);
console.log("root element loaded");
