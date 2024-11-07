"use client";

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

  // Menghitung rata-rata rating
  const averageRating = ratings.length
    ? ratings.reduce((total, rating) => total + rating.stars, 0) / ratings.length
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || stars === 0) {
      alert("Harap isi semua field dan pilih rating.");
      return;
    }

    const newRating: Rating = { name, comment, stars };
    setRatings([...ratings, newRating]);
    setName('');
    setComment('');
    setStars(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-red-300 shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Formulir Kontak</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nama:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Beri Komentar CV:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700">Beri Rating:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setStars(star)}
                  className={`text-2xl ${star <= stars ? 'text-yellow-500' : 'text-white-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-grey-500"
          >
            Kirim
          </button>
        </form>

        {/* Menampilkan rata-rata rating */}
        <div className="mt-8">
          <h3 className="text-xl font-bold">Rata-Rata Rating: {averageRating.toFixed(1)} / 5</h3>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`text-2xl ${star <= Math.round(averageRating) ? 'text-yellow-500' : 'text-black-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Menampilkan rating yang telah dikirim */}
        <div className="mt-8">
          <h3 className="text-xl font-bold">Rating yang Dikirim</h3>
          {ratings.length > 0 ? (
            <ul>
              {ratings.map((rating, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  <h4 className="font-semibold">{rating.name}</h4>
                  <p>{rating.comment}</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-2xl ${star <= rating.stars ? 'text-yellow-500' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Belum ada rating yang dikirim.</p>
          )}
        </div>
      </div>
    </div>
  );
}
