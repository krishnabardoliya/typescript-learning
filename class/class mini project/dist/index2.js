"use strict";
class PaypalPayment {
    constructor(email) {
        this.email = email;
    }
    processPayment(amount) {
        console.log(`processing payment of ${amount}!`);
    }
    validatePaymentDetails() {
        return this.email ? true : false;
    }
}
class CreditCardPayment {
    constructor(cardNumber, cardHolderName) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }
    processPayment(amount) {
        console.log(`processing payment of ${amount}!`);
    }
    validatePaymentDetails() {
        return (this.cardNumber && this.cardHolderName) ? true : false;
    }
}
class PaymentProcessor {
    handlePayment(paymentMethod, amount) {
        if (paymentMethod.validatePaymentDetails()) {
            paymentMethod.processPayment(amount);
            console.log("Payment processed successfully");
        }
        else {
            console.log("Invalid payment details.");
        }
    }
}
const paypal = new PaypalPayment("Christopher");
const creditcard = new CreditCardPayment(122443443, "Pollack");
const paymentProcessor = new PaymentProcessor();
paymentProcessor.handlePayment(paypal, 100);
paymentProcessor.handlePayment(creditcard, 500);
