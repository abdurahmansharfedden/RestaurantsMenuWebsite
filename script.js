/**
 * Hides all possible views (Home, All List, Restaurant Details).
 */
function hideAllViews() {
  // Hide Home
  const homeView = document.getElementById('home-view');
  if (homeView) homeView.classList.add('hidden');

  // Hide All Restaurants Grid
  const allView = document.getElementById('all-restaurants-view');
  if (allView) allView.classList.add('hidden');

  // Hide all Restaurant Detail sections including static pages
  const details = document.querySelectorAll('.restaurant-detail');
  details.forEach(section => {
    section.classList.add('hidden');
  });
}

/**
 * Shows the Home View (Hero + Listings) and hides all Restaurant Details.
 */
function showHome() {
  hideAllViews();

  // Show the Home View container
  document.getElementById('home-view').classList.remove('hidden');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Shows the "All Restaurants" grid view.
 */
function showAllRestaurants() {
  hideAllViews();

  // Show All Restaurants View
  const allView = document.getElementById('all-restaurants-view');
  if (allView) {
    allView.classList.remove('hidden');
    // Scroll to top of the view
    allView.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Shows a specific Restaurant Detail view and hides the Home View.
 * @param {string} restaurantId - The ID of the restaurant section to show.
 */
function showRestaurant(restaurantId) {
  hideAllViews();

  // Show the target restaurant section
  const target = document.getElementById(restaurantId);
  if (target) {
    target.classList.remove('hidden');
    // Scroll to top of the section
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Shows a static page (About, Help, etc) reusing the detail view logic.
 * @param {string} pageId - The ID of the static section.
 */
function showStaticPage(pageId) {
  hideAllViews();

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Toggles the visibility of the reviews section for a restaurant.
 * @param {string} reviewsId - The ID of the reviews container.
 */
function toggleReviews(reviewsId) {
  const reviewsContainer = document.getElementById(reviewsId);
  if (reviewsContainer) {
    // Toggle the 'hidden' class
    if (reviewsContainer.classList.contains('hidden')) {
      reviewsContainer.classList.remove('hidden');
    } else {
      reviewsContainer.classList.add('hidden');
    }
  }
}
