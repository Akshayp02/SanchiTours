

class InitiateWhatsApp {
   static sendMessageToSelf(customerName) {
    if (!customerName) {
      console.error("Customer name is required");
      return;
    }

    // The message content
    const message = encodeURIComponent(
      `Inquiry: Customer Name - ${customerName}`
    );
    const whatsappURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    }

  // Function to send a pre-filled message via WhatsApp to any given mobile number
  static sendMessageToMe(name, mobileNumber, pickupAddress, dropAddress) {
    if (!name || !mobileNumber || !pickupAddress || !dropAddress) {
      console.error("All fields are required");
      return;
    }
    const message = encodeURIComponent(
      `Booking Inquiry: Customer Locatons - ${name}\nMobile Number - ${mobileNumber}\nPickup Address - ${pickupAddress}\nDrop Address - ${dropAddress}`
    );
    
    const whatsappURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${message}`;
    window.location.href = whatsappURL;
  }
}

export default InitiateWhatsApp;
