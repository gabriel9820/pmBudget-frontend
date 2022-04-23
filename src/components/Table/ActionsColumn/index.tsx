import { FaPen, FaTrashAlt } from "react-icons/fa";

import { Container } from "./styles";

interface IProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const ActionsColumn: React.FC<IProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <Container>
      {onEditClick && (
        <button onClick={onEditClick}>
          <FaPen size={18} />
        </button>
      )}
      {onDeleteClick && (
        <button
          onClick={onDeleteClick}
          style={{ marginLeft: onEditClick ? 14 : 0 }}
        >
          <FaTrashAlt size={18} />
        </button>
      )}
    </Container>
  );
};
