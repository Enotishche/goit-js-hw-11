import axios from 'axios';
export default class GallaryApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }
  async fetchImages() {
    const BASE_URL = "https://pixabay.com/api/";
    const PARAM = "image_type=photo&orientation=horizontal&safesearch=true"
    const PER_PAGE = "per_page=40";
    const KEY = '32054991-499f02cceef189bab0a177a68';

    const URL = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&${PARAM}&page=${this.page}&${PER_PAGE}`;
    
    const response = await axios.get(URL);
     return response;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  
}