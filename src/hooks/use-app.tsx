import { useEffect, useRef, useState } from "react";
import postApp from "../api/tracker/post";
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';

export const useApp = () => {
    const [isTracked, setIsTracked] = useState(false);
    const isInitialMount = useRef(true);

    useEffect(() => {
        AOS.init({});
        if (isInitialMount.current) {
            isInitialMount.current = false;
            (async () => {
                if (isTracked) return;
                let storedUserId = localStorage.getItem('userId');
                const pageUrl = window.location.href;

                if (!storedUserId) {
                    storedUserId = uuidv4();
                    await postApp.addVisit({
                        page_url: pageUrl,
                        user_id: storedUserId
                    });
                    localStorage.setItem('userId', storedUserId);
                }
                
                setIsTracked(true);
            })();
        }
    }, []);

}