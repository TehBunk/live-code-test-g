import React from 'react'

const SlowImport = DelayedImport<React.FC>(() => import('./SlowImport'), 10000);

// Assume this is a really large component
export default function ReallyLargeComponent() {
    return <>
        I am a really large component.
        <SlowImport />
    </>
}

type ImportFunc<T extends React.ComponentType<any>> = () => Promise<{ default: T }>;

export function DelayedImport<T extends React.ComponentType<any>>(
    importFunc: ImportFunc<T>,
    delay: number
): React.LazyExoticComponent<T> {
    return React.lazy(() =>
        new Promise<{ default: T }>((resolve) => {
            setTimeout(() => resolve(importFunc()), delay);
        })
    );
}
