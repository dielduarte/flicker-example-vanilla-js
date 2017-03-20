import FlickerApi from './services/FlickerApi.js';
import BuildElements from './services/BuildElements.js';
import Utils from './services/Utils.js';

Utils.registerLoadMoreScrollEvent(LoadMoreScrollCallBack);

const INITIAL_REQUEST_NUMBERS = Utils.getRequestNumbers();
let whileInteretor = 1;

while(whileInteretor <= INITIAL_REQUEST_NUMBERS) {
    getRecentsFlicker();
    whileInteretor++;
}

function LoadTagsCallback(event) {
  const { id } = event.target.dataset;

  FlickerApi
    .getTags(id)
    .then(result => BuildElements.parsePhotoTags(result.photo.tags.tag))
    .then(tagsHtml => BuildElements.showTags(event, tagsHtml));
}


function LoadMoreScrollCallBack(event) {
  const DOCUMENT_HEIGHT = document.documentElement.scrollHeight;
  const CLIENT_HEIGHT = document.documentElement.clientHeight;
  const WINDOW_YOFFSET = window.pageYOffset;

  if(DOCUMENT_HEIGHT - (CLIENT_HEIGHT + WINDOW_YOFFSET) < 30) {
    getRecentsFlicker(true);
  }
}

function getRecentsFlicker(addPage = false) {
  FlickerApi
    .getRecents(addPage)
    .then(result => BuildElements.parsePictures(result.photos.photo))
    .then(photosHtml => BuildElements.showFlickerContainer(photosHtml))
    .then(() => Utils.registerLoadTagsEvent(LoadTagsCallback));
}
