function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={loadDefault}>
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#createAccount"
                onClick={loadCreateAccount}
                id="createAccount"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#login"
                onClick={loadLogin}
                id="login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#deposit"
                onClick={loadDeposit}
                id="deposit"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#withdraw"
                onClick={loadWithdraw}
                id="withdraw"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={loadBalance}
                id="balance"
              >
                Balance
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#alldata"
                onClick={loadAllData}
                id="allData"
              >
                All Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function loadCreateAccount() {
  console.log("loading create account page");
}

function loadLogin() {
  console.log("loading login");
}

function loadDeposit() {
  console.log("loading deposit page");
}

function loadWithdraw() {
  console.log("loading withdraw page");
}

function loadBalance() {
  console.log("loading balance page");
}

function loadAllData() {
  console.log("loading all data page");
}

function loadDefault() {}
