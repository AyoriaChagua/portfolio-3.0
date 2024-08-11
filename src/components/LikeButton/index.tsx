import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useTracker } from '../../hooks/use-tracker';


export default function LikeButton() {
    const { handleLike, liked } = useTracker();
    return (
        <button
            onClick={handleLike}
        >
            {liked ? <FaHeart size={23} color='#413DF9' /> : <CiHeart size={25} color='#413DF9' className="transform transition duration-500 hover:scale-125 gap-2" />}
        </button>
    );
};

