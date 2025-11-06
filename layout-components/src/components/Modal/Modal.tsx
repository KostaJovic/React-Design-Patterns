import { useState } from 'react';
import { Backdrop } from './Backdrop';
import { Content } from './Content';

/**
 * Modal component for displaying a modal dialog
 * @param children - Props containing the children to be displayed inside the modal
 * @returns A button that triggers the modal and the modal itself when open
 */
export const Modal = ({ children }:{children: React.ReactNode}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Show Modal</button>
            {open && (
                <Backdrop onClick={() => setOpen(false)}>
                    <Content>
                        <button onClick={() => setOpen(false)}>Close</button>
                        {children}
                    </Content>
                </Backdrop>
            )}
        </>
    );
}