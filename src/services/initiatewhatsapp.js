

class InitiateWhatsApp {
   static sendMessageToSelf(customerName) {
    if (!customerName) {
      console.error("Customer name is required");
      return;
    }

    // The message content
    const message = encodeURIComponent(
      `Inquiry: ${customerName}`
    );
    const whatsappURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    }
}

export default InitiateWhatsApp;
