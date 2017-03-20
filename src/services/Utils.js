class Utils {
  constructor() {
    this.window = window;
    this.getRequestNumbers();
  }

  getWindowHeight() {
    return this.window.innerHeight;
  }

  getWindowWidth() {
    return this.window.innerWidth;
  }

  getLinePerRequest() {
    const WINDOW_WIDTH = this.getWindowWidth();
    let lines = 2;

    if(WINDOW_WIDTH <= 800) {
       lines = 5;
     } else if (WINDOW_WIDTH > 800 && WINDOW_WIDTH <= 1200) {
       lines = 3;
     }

     return lines;
  }

  getRequestNumbers() {
    const CARD_MIN_HEIGHT = 184;
    const LINE_PER_REQUEST = this.getLinePerRequest();
    const HEIGHT_PER_REQUEST = CARD_MIN_HEIGHT * LINE_PER_REQUEST;
    const WINDOW_HEIGHT = this.getWindowHeight();

    return Math.ceil(WINDOW_HEIGHT / HEIGHT_PER_REQUEST);
  }

  registerLoadTagsEvent(callback) {
    const loadMoreBtns = document.querySelectorAll('.btn__loadmore');
    loadMoreBtns.forEach((loadMoreBtn, index) => {
      loadMoreBtns[index].addEventListener("click", callback);
    });
  }

  registerLoadMoreScrollEvent(callback) {
    this.window.addEventListener("scroll", callback);
  }
}



export default new Utils();
