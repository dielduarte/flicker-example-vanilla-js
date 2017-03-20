class BuildElements {
  constructor() {
    this.flickerContainer = document.querySelector('.flicker');
    this.pictureCardsHtml = '';
  }

  parsePictures(pictures) {
    pictures.forEach(picture => {
      const { url_t, title, id } = picture;

      this.pictureCardsHtml +=`<div class="flicker__card">
                <img src="${url_t}"  alt="" class="flicker__image">
                <h1 class="flicker__image-title">${title}</h1>
                <div class="flicker__tags-container">
                  <button type="button"
                          name="button"
                          class="flicker__tag btn__loadmore"
                          data-id="${id}">
                    Loag Tags
                  </button>
                </div>
              </div>`;
    });

    return this.pictureCardsHtml;
  }

  parsePhotoTags(tags) {
    let tagsHtml = '';

    if(tags.length > 0) {
      tags.forEach((tag, index) => {
        if (index > 1)
          return false;

        tagsHtml +=`<button type="button" name="button" class="flicker__tag">
                      ${tag._content}
                    </button>`;
      });
    }

    return tagsHtml;
  }

  showFlickerContainer(photosHtml) {
    this.flickerContainer.innerHTML = photosHtml;
    return true;
  }

  showTags(event, tagsHtml) {
    if(tagsHtml === '') {
      event.toElement.textContent = 'nothing found :(';
    } else {
      event.target.parentElement.innerHTML = tagsHtml;
    }
  }
}



export default new BuildElements();
