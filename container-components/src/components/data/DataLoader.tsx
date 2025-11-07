import React, { useState, useEffect, ReactElement } from 'react';

type DataLoaderProps<T, K extends string> = {
    getDataFn: () => Promise<T>;
    resourceName: K;
    children: ReactElement<{ [key in K]: T }>;
};

export const DataLoader = <T, K extends string>({ 
    getDataFn,
    resourceName, 
    children
}: DataLoaderProps<T, K>) => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            const newData = await getDataFn();
            console.log(newData);
            setData(newData);
        })();
    }, [getDataFn]);

    if (data === null) {
        return null;
    }

    return React.cloneElement(children, { 
        [resourceName]: data 
    } as { [key in K]: T });
};