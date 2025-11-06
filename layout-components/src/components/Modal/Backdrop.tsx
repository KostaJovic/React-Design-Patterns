type BackdropProps = {
    children: React.ReactNode;
    onClick: () => void;
};

/**
 * Backdrop component for the Modal
 * @param children - Props containing the children to be displayed inside the backdrop
 * @param onClick - Function to be called when the backdrop is clicked
 * @returns A styled div that serves as the modal backdrop
 */
export const Backdrop = ({ children, onClick }: BackdropProps) => {
    return (
        <div style={{
            position: 'fixed',
            zIndex: 100,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} onClick={onClick}>
            { children }
        </div>
    );
};