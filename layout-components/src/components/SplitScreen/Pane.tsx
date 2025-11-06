type PaneProps = {
    weight: number;
    children: React.ReactNode;
};

export const Pane = ({ weight, children }: PaneProps) => {
    return (
        <div style={{ flex: weight }}>
            { children }
        </div>
    );
};