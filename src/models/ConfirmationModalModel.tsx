export interface IConfirmationModal {
    title: string;
    details?: JSX.Element;
    confirmationText: string;
    genericError?: string;
    parentCallback: () => void;
    onConfirm: () => void;
}