import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = ({ items = [] }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const totalPrice = items.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert('Por favor seleccione un método de pago');
      return;
    }
    
    setProcessing(true);
    // Simular procesamiento de pago
    setTimeout(() => {
      setProcessing(false);
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      
      <div className="checkout-summary">
        <h2>Resumen de compra</h2>
        <div className="items-summary">
          {items.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.imagen} alt={item.nombre} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio unitario: ${item.precio}</p>
              </div>
              <span className="checkout-item-total">
                ${(item.precio * item.cantidad).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="total-amount">
          <strong>Total a pagar: ${totalPrice}</strong>
        </div>
      </div>

      <div className="payment-methods">
        <h2>Método de pago</h2>
        <div className="payment-buttons">
          <button 
            className={`payment-button ${paymentMethod === 'credit' ? 'active' : ''}`}
            onClick={() => handlePaymentMethod('credit')}
          >
            <i className="fas fa-credit-card"></i>
            <span>Tarjeta de Crédito</span>
          </button>
          <button 
            className={`payment-button ${paymentMethod === 'debit' ? 'active' : ''}`}
            onClick={() => handlePaymentMethod('debit')}
          >
            <i className="fas fa-credit-card"></i>
            <span>Tarjeta de Débito</span>
          </button>
          <button 
            className={`payment-button ${paymentMethod === 'transfer' ? 'active' : ''}`}
            onClick={() => handlePaymentMethod('transfer')}
          >
            <i className="fas fa-university"></i>
            <span>Transferencia Bancaria</span>
          </button>
        </div>
      </div>

      <button 
        className="process-payment-button"
        onClick={handlePayment}
        disabled={!paymentMethod || processing}
      >
        {processing ? 'Procesando...' : 'Confirmar Pago'}
      </button>
    </div>
  );
};

export default Checkout;