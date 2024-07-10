import {
    sortingEl,
    sortingBtnRecentEl,
    sortingBtnRelevantEl
} from '../common.js';

const clickHandler = event => {
    // get clicked button element
    const clickedButtonEl = event.target.closest('.sorting__button');

    // stop function
    if (!clickedButtonEl) return;

    // check if intention is recent or relevent sorting
    const recent = clickedButtonEl.className.includes('--recent') ? true : false;

    // sort job items
    if (recent) {
        
    } else {

    }
};

sortingEl.addEventListener('click' , clickHandler);