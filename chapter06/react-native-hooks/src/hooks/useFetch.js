import { useState, useEffect } from "react";

export const useFecth = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);

    useEffect(async () => {
        const fetchData = async () => {
            try{
                setInProgress(true);
                const res = await fetch(url);
                const result = await res.json();
                if (res.ok){
                    setData(result);
                    setError(null);
                } else{
                    throw result;
                }
            } catch(error){
                setError(error);
            } finally{
                setInProgress(false);
            }
        };
        fetchData();
    }, []);

    return {data, error, inProgress};
};