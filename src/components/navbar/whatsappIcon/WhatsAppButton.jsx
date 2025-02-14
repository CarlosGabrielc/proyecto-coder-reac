import './WhatsAppButton.css';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://walink.co/7d8490"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp size={24} color="#25D366" />
    </a>
  );
};

export default WhatsAppButton;