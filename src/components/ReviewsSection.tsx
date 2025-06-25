import { addDoc, collection, getDocs } from "firebase/firestore";
import { Send, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "../Firebase";

export default function ReviewsSection() {
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
  const [reviews, setReviews] = useState([
    {
      id: 0,
      name: "",
      note: 5,
      message: "",
      avatar: "",
      date: "",
    },
  ]);

  const convertDate = (timestamp: number) => {
    //console.log(timestamp);
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const day = "0" + date.getDate();
    const month = "0" + (date.getMonth() + 1);
    const year = date.getFullYear();
    const formattedTime = day.substr(-2) + "/" + month.substr(-2) + "/" + year + " - " + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  };

  const fetchReviews = async () => {
    getDocs(collection(db, "reviews")).then((querySnapshot: { docs: { data: () => any; id: string }[] }) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const n = newData
        .map((e) => {
          return {
            ...e,
            dateInt: e.date,
            date: convertDate(e.date),
          };
        })
        .sort((a, b) => b.dateInt - a.dateInt);
      // .filter(e => e.validated === true);

      console.log(n);
      setReviews(n);
    });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const review = {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().getTime(),
        avatar: newReview.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
      };
      await addDoc(collection(db, "reviews"), {
        name: review.name,
        note: review.rating,
        message: review.comment,
        avatar: review.avatar,
        date: new Date().getTime(),
        validated: false,
      });

      // setReviews([review, ...reviews]);
      setNewReview({ name: "", rating: 5, comment: "" });
      await new Promise((r) => setTimeout(r, 500));
      fetchReviews();
    }
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"} ${interactive ? "cursor-pointer hover:text-yellow-300" : ""}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.note, 0) / reviews.length;

  return (
    <section id="reviews" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Avis Utilisateurs
            <span className="block text-2xl font-normal text-white/60 mt-2">Ce qu'ils en pensent</span>
          </h2>

          {/* Rating Summary */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
            {renderStars(Math.round(averageRating))}
            <div className="text-white/60 mt-2">{reviews.length} avis</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-white font-semibold text-sm">{review.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <span className="text-white/40 text-sm">{review.date}</span>
                    </div>
                    {renderStars(review.note)}
                    <p className="text-white/80 mt-3 leading-relaxed">{review.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">Donnez votre avis</h3>

              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Votre nom</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Note</label>
                  {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Votre commentaire</label>
                  <TextareaAutosize
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows={4}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none h-auto"
                    placeholder="Partagez votre expérience sur le site, sur les services proposés, sur le travail effectué..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmitReview(e);
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>Publier l'avis</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
