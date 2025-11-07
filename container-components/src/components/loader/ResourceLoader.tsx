import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

type ResourceLoaderProps = {
    resourceUrl: string;
    resourceName: string;
    children: ReactNode;
}

export const ResourceLoader = ({ resourceUrl, resourceName, children } : ResourceLoaderProps) => {
    const [data,setData] = useState(null);

    useEffect(() => {
        (async() => {
            const response = await axios.get(resourceUrl);
            setData(response.data);
        })()
    }, [])

    return data && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {[ resourceName ] : data });
        }
        return child;
    })
}