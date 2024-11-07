import React, { useState } from 'react';

type Rating = {
  name: string;
  comment: string;
  stars: number;
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [ratings, setRatings] = useState<Rating[]>([]);

  // Calculate the average rating
  const averageRating = ratings.length
    ? ratings.reduce((total, rating) => total + rating.stars, 0) / ratings.length
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || stars === 0) {
      alert("Please fill out all fields and select a rating.");
      return;
    }

    const newRating: Rating = { name, comment, stars };
    setRatings([...ratings, newRating]);
    setName('');
    setComment('');
    setStars(0);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Rating:</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setStars(star)}
                className={`text-2xl ${star <= stars ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Display average rating */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Average Rating: {averageRating.toFixed(1)} / 5</h3>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`text-2xl ${star <= Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
