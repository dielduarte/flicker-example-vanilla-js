import ApiConfig from '../config/ApiConfig';

class FlickerApi {
  constructor() {
    this.config = ApiConfig;
    this.page = 1;
    this.maxPages = 200;
  }

  getRecents(addPages = false) {
    if(addPages && this.page <= this.maxPages - 1) {
      this.page++;
    }

    const { END_POINTS, API_KEY, PARAMS } = this.config;
    const URL = `${END_POINTS.GET_RECENTS}${API_KEY}&per_page=${PARAMS.PER_PAGE}&page=${this.page}&extras=${PARAMS.EXTRAS}`;

    return fetch(URL)
            .then(response => response.json())
            .then(response => {
              this.maxPages = response.photos.pages;
              return response;
            });
  }

  getTags(id = null) {
    const { END_POINTS, API_KEY } = this.config;
    const URL = `${END_POINTS.GET_TAGS}${API_KEY}&photo_id=${id}`;

    return fetch(URL)
            .then(response => response.json());
  }
}



export default new FlickerApi();
