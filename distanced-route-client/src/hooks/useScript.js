import { useEffect } from 'react';

const useScript = (url, callback) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);
        setTimeout(() => {
            callback();
        }, 1000);
        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export default useScript;
