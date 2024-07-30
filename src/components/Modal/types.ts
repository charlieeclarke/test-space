export type ModalProps = {
  ModalTitle?: string;
  ModalButtonLabel?: string;
  children?: React.ReactNode;
};

export type ModalComponent = React.FC<ModalProps>;
