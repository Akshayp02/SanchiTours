class InitiateCall {
    // Function to initiate the call to a phone number
    static dialNumber() {
      if (process.env.REACT_APP_CALL_NUMBER) {
        window.location.href = `tel:${process.env.REACT_APP_CALL_NUMBER}`; 
      } else {
        console.error('Phone number is required to make a call');
      }
    }
  }
  
  export default InitiateCall;
  