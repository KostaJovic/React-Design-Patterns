
type ListProps<T, K extends string> = {
    items: T[]; // Array of items of generic type T
    resourceName: K;
    itemComponent: React.ComponentType<{ [key in K]: T }>; // Component that takes a prop named as resourceName of type T, the generic type is then used to type the items array
};

/**
 * A generic List component that renders a list of items using a specified item component.
 * @param {T[]} items - An array of items to be displayed in the list.
 * @param {string} resourceName - The name of the resource, used as a prop key for the item component.
 * @param {React.ComponentType} itemComponent - The component used to render each item in the list.
 * @returns {JSX.Element} The rendered List component.
*/
export const List = <T, K extends string>({ 
    items,
    resourceName, 
    itemComponent: ItemComponent
}: ListProps<T, K>) => (
    <>
        {items.map((item, i) => (
            <ItemComponent key={i} {...{ [resourceName]: item } as any} />
        ))}
    </>
);
