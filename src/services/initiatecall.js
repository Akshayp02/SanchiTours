class InitiateCall {
    // Function to initiate the call to a phone number
    static dialNumber() {
        const phoneNumber = process.env.REACT_APP_CALL_NUMBER;
      if (phoneNumber) {
        window.location.href = `tel:${phoneNumber}`; 
      } else {
        console.error('Phone number is required to make a call');
      }
    }
  }
  
  export default InitiateCall;
  