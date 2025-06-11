import axios from "axios"

export const fetchArticlesWithQuery = async searchQuery=>
{const infoFetched = await axios.get(`/search?query=${searchQuery}`);
return infoFetched.data.hits;
}
