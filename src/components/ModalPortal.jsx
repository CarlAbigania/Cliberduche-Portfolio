import { createPortal } from 'react-dom';

/**
 * ModalPortal - Renders modal content at the root level, outside all section stacking contexts
 * This prevents z-index issues with nested sections
 */
const ModalPortal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    children,
    document.body
  );
};

export default ModalPortal;
