import supabase from "../http";

const postApp = {
    addVisit: async (dataTrack: VisitData) => {
        const { data, error } = await supabase
            .rpc('add_visit', { user_id: dataTrack.user_id, page_url: dataTrack.page_url });
        if (error) {
            console.error('Error adding visit:', error);
        } else {
            console.log('Visit added:', data);
        }
    },
    addLike: async (dataTrack: LikeData) => {
        const { data, error } = await supabase
            .rpc('add_like', { user_id: dataTrack.user_id, page_url: dataTrack.page_url });
        if (error) {
            console.error('Error adding like:', error);
        } else {
            console.log('Like added:', data);
        }
    },
    removeLike: async (userId: string, pageUrl: string): Promise<void> => {
        const { error } = await supabase
            .rpc('remove_like', {
                p_user_id: userId, 
                p_page_url: pageUrl
            });
    
        if (error) {
            console.error('Error removing like:', error);
        }
    }
    
}

export default postApp;