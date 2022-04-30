import Modal from "react-modal";

import close from "../../assets/close.svg";

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const CustomModal: React.FC<IProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={close} alt="Fechar" />
      </button>

      {children}
    </Modal>
  );
};
