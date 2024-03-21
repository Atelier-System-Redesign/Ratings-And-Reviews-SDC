const connection = require('../db/database.js');

exports.postReview = (postData) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO reviews (product_id, rating, summary, body, recommend, name, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [postData.product_id, postData.rating, postData.summary,
      postData.body, postData.recommend, postData.name, postData.email],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});

exports.postReviewPhotos = (reviewId, url) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO review_photos (review_id, url) VALUES ($1, $2)',
    [reviewId, url],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});
