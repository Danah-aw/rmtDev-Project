import {
    state,
    sortingEl,
    sortingBtnRecentEl,
    sortingBtnRelevantEl
} from '../common.js';
import renderJobList from './JobList.js';

const clickHandler = event => {
    // get clicked button element
    const clickedButtonEl = event.target.closest('.sorting__button');

    // stop function
    if (!clickedButtonEl) return;

    // check if intention is recent or relevent sorting
    const recent = clickedButtonEl.className.includes('--recent') ? true : false;

    // make sorting button look (in)active
    if (recent) {
        sortingBtnRecentEl.classList.add('sorting__button--active');
        sortingBtnRelevantEl.classList.remove('sorting__button--active');
    } else {
        sortingBtnRecentEl.classList.remove('sorting__button--active');
        sortingBtnRelevantEl.classList.add('sorting__button--active');
    }

    // sort job items
    if (recent) {
        state.searchJobItems.sort((a, b) => {
            return a.daysAgo - b.daysAgo;
        });
    } else {
        state.searchJobItems.sort((a, b) => {
            return b.relevanceScore - a.relevanceScore;
        });
    }

    // render job items in list
    renderJobList();
};

sortingEl.addEventListener('click' , clickHandler);