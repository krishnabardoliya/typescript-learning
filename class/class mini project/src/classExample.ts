interface PaymentMethods {
    processPayment(amount: number): void;
    validatePaymentDetails(): boolean;
} 

class PaypalPayment implements PaymentMethods {
    public email : string
    constructor(email: string) {
        this.email = email;
    }

    processPayment (amount: number) {
        console.log(`processing payment of ${amount}!`)
    }

    validatePaymentDetails(): boolean {
        return this.email ? true : false;
    }
}


class CreditCardPayment implements PaymentMethods {
    constructor(public cardNumber: number, public cardHolderName: string){}

    processPayment (amount: number) {
        console.log(`processing payment of ${amount}!`)
    }

    validatePaymentDetails(): boolean {
        return (this.cardNumber && this.cardHolderName) ? true : false;
    }
}

class PaymentProcessor {
    handlePayment(paymentMethod: PaymentMethods, amount: number): void {
        if(paymentMethod.validatePaymentDetails()) {
            paymentMethod.processPayment(amount); 
            console.log("Payment processed successfully");
        } else {
            console.log("Invalid payment details.");
        }
    }
}

const paypal = new PaypalPayment("Christopher");
const creditcard = new CreditCardPayment(122443443,"Pollack");

const paymentProcessor = new PaymentProcessor();

paymentProcessor.handlePayment(paypal, 100);
paymentProcessor.handlePayment(creditcard, 500);

