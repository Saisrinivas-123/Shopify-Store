import React from 'react';
import { CircularProgress } from '@material-ui/core';

interface FullScreenLoaderProps {
    isLoading: boolean;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }
    return (
        <div style={styles.loadingOverlay}>
            <CircularProgress size={70} />
        </div>
    );
};

const styles: any = {
    loadingOverlay: {
        display: 'flex',
        background: 'rgba(255, 255, 255, 0.95)',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        top: '0',
        zIndex: 9998,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default FullScreenLoader;
