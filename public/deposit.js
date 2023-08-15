function Deposit() {
  const ctx = React.useContext(UserContext);

  const [depositAmtInput, setDepositAmtInput] = React.useState("");
  const [isDepositSubmitButtonDisabled, setIsDepositSubmitButtonDisabled] =
    React.useState(true); // deposit button is disabled by default
  const user = ctx.users.filter((x) => x.name === CurrentUser)[0];
  const [currentBalanceToDisplay, setCurrentBalanceToDisplay] = React.useState(
    user ? user.currentBalance : 0
  );

  function validateDepositAmt(val) {
    // val is a number
    if (val <= 0) {
      return false;
    }
    return true;
  }

  function onDepositInputChange(e) {
    // validate deposit input

    const val = e.currentTarget.value;
    // only allows number, an integer
    // testing the last charcter of the input if it is digit
    if (!isStringNumber(val[val.length - 1])) {
      if (val[0] == "-") {
        alert("You are trying to enter a negative number");
        setDepositAmtInput("");
        return;
      }

      if (val.length != 0) {
        alert("Only numbers are allowed to enter");
        setDepositAmtInput(val.substring(0, val.length - 1));
        tryValidateDepositAmt(val);

        return;
      }
    }
    setDepositAmtInput(val);
    tryValidateDepositAmt(val);
  }
  function tryValidateDepositAmt(val) {
    if (validateDepositAmt(convertFromStringToNumber(val))) {
      setIsDepositSubmitButtonDisabled(false); // enable the deposit button
    } else {
      setIsDepositSubmitButtonDisabled(true);
    }
  }

  function onDepositInputLostFocus(e) {
    if (e.currentTarget.value.length === 0) {
      setIsDepositSubmitButtonDisabled(true);
    } else {
      setIsDepositSubmitButtonDisabled(false);
    }
  }

  function handleDepositInputSubmit(e) {
    e.preventDefault();
    console.log("deposit amount = " + depositAmtInput);
    const depositAmt = convertFromStringToNumber(depositAmtInput);
    if (validateDepositAmt(depositAmt)) {
      // update the context
      user.currentBalance += depositAmt;
      // update the balance displayed in deposit card
      setCurrentBalanceToDisplay(user.currentBalance);
      console.log("current balance = " + user.currentBalance);

      alert(`Deposit $${depositAmt} successfully`);

      // clear the deposit amount in the input field
      setDepositAmtInput("");
      setIsDepositSubmitButtonDisabled(true); // disable deposit button again
    }
  }

  return (
    <>
      <BankSubmissionForm
        formName="Deposit"
        bgcolor="info"
        showSubmissionForm={true}
        submissionForm={
          <div>
            <div className="d-flex mx-2 my-2 justify-content-between">
              <p>Balance</p>
              <p>${currentBalanceToDisplay}</p>
            </div>

            <div className="form-group mb-3">
              <div className="mx-2">
                <label className="my-2" htmlFor="depositAmountInputId">
                  Deposit Amount
                </label>
                <input
                  className="form-control my-2"
                  onChange={onDepositInputChange}
                  onBlur={onDepositInputLostFocus}
                  value={depositAmtInput}
                  id="depositAmountInputId"
                  placeholder="Please input deposit amount"
                />
                <button
                  className="btn btn-light my-2 mb-3"
                  type="submit"
                  disabled={isDepositSubmitButtonDisabled}
                  onClick={handleDepositInputSubmit}
                >
                  {" "}
                  Deposit
                </button>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
