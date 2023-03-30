export interface IPropsFirebaseDetailUI {
  fetchBoard?: any;
  isHovering: boolean;
  onMouseOverLocation: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  onClickDelete: () => void;
}
