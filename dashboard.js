'use strict';

const trendMonths = [...document.querySelectorAll('.trend-month')];
const trendValue = document.querySelector('.trend-value');

if (trendValue) {
  for (const month of trendMonths) {
    month.addEventListener('click', () => {
      const selectedMonth = document.querySelector('.trend-month[aria-pressed="true"]');
      selectedMonth?.setAttribute('aria-pressed', 'false');
      month.setAttribute('aria-pressed', 'true');
      trendValue.textContent = `${month.dataset.month}월 · ${month.dataset.count}건`;
    });
  }
}

const zeroPriority = document.querySelector('details#zero-priority');

if (zeroPriority) {
  const openLinkedSection = () => {
    if (location.hash === '#zero-priority') {
      zeroPriority.open = true;
    }
  };

  openLinkedSection();
  window.addEventListener('hashchange', openLinkedSection);
}
