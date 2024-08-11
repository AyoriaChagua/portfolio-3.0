import { useEffect, useState } from "react";
import postApp from "../api/tracker/post";
import getApp from "../api/tracker/get";

export const useTracker = () => {

    let storedUserId = localStorage.getItem('userId');
    const pageUrl = window.location.pathname;

    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (storedUserId) {
            if (liked) {
                await postApp.removeLike(storedUserId, pageUrl);
                setLiked(false);
            } else {
                await postApp.addLike({ user_id: storedUserId, page_url: pageUrl });
                setLiked(true);
            }
        }
    };

    useEffect(() => {

        (async () => {
            const resLiked = await getApp.hasUserLiked(storedUserId!, pageUrl);
            setLiked(resLiked);
        })();

    }, []);

    return {
        handleLike,
        liked
    }
}