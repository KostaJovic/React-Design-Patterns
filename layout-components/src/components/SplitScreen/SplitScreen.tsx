import { Pane } from './Pane';
import { Container } from './Container';

type SplitScreenProps = {
    leftWeight?: number;
    rightWeight?: number;
    children: React.ReactNode[];
};

/**
 * A layout component that splits the screen into two panes using children props.
 * Each pane can be assigned a weight to determine its relative size.
 * @param {number} [leftWeight=1] - The weight of the left pane.
 * @param {number} [rightWeight=1] - The weight of the right pane.
 * @param {React.ReactNode[]} children - An array containing two React nodes: the left and right panes.
 * @returns {JSX.Element} The rendered SplitScreen component.
*/
export const SplitScreen = ({ 
    leftWeight = 1,
    rightWeight = 1,
    children 
}: SplitScreenProps ) => {
    const [Left, Right] = children
    return (
        <Container>
            <Pane weight={ leftWeight }>
                { Left }
            </Pane>
            <Pane weight={ rightWeight }>
                { Right }
            </Pane>
        </Container>
    );
} 