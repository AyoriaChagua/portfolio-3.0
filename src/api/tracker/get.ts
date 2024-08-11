import supabase from "../http"


const getApp = {
  hasUserLiked: async (userId: string, pageUrl: string): Promise<boolean> => {

    const { data, error } = await supabase
      .rpc('has_user_liked', { user_id_input: userId, page_url_input: pageUrl });
    if (error) {
      console.error('Error checking user like status:', error);
      return false;
    }

    return  data;
  },
}


export default getApp;
