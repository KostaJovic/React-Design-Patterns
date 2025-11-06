/**
 * Content component for the Modal
 * @param children - Props containing the children to be displayed inside the modal content
 * @returns A styled div that serves as the modal content container
 */
export const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{
            background: 'white',
            margin: '10% auto',
            padding: '20px',
            borderRadius: '5px',
            width: '50%'
        }}
        onClick={(e) => { e.stopPropagation();}}>
            { children }
        </div>
    );
};