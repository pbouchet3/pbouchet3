import { collection, getDocs } from "firebase/firestore";
import { Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "../Firebase";
import StarsBar from "./StarsBar";

export default function ReviewsSection() {
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [formHeight, setFormHeight] = useState<number | null>(null);
  const [lastScrollDirection, setLastScrollDirection] = useState("down")
  const [showTopBlur, setShowTopBlur] = useState(false);
  const [showBottomBlur, setShowBottomBlur] = useState(false);
  const [errorStars, setErrorStars] = useState(false)

  useEffect(() => {
    const updateHeight = () => {
      if (inputRef.current) {
        setFormHeight(inputRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    // let scrollDirection: "down" | "up" = "down";
    let scrollDirection = lastScrollDirection;
    let atEdgeTimeout: NodeJS.Timeout | null = null;
    let scrollInterval: NodeJS.Timeout | null = null;

    const startScrolling = () => {
      if (scrollInterval) return;

      scrollInterval = setInterval(() => {
        const el = scrollRef.current;
        if (!el || isUserInteracting || el.scrollHeight <= el.clientHeight) return;

        const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        const isAtTop = el.scrollTop <= 0;

        const timeBetweenScrolls = 5000; // milliseconds

        if (scrollDirection === "down") {
          if (isAtBottom) {
            if (!atEdgeTimeout) {
              atEdgeTimeout = setTimeout(() => {
                scrollDirection = "up";
                setLastScrollDirection("up");
                atEdgeTimeout = null;
              }, timeBetweenScrolls);
            }
          } else {
            el.scrollTop += 1;
            if (atEdgeTimeout) {
              clearTimeout(atEdgeTimeout);
              atEdgeTimeout = null;
            }
          }
        } else {
          if (isAtTop) {
            if (!atEdgeTimeout) {
              atEdgeTimeout = setTimeout(() => {
                scrollDirection = "down";
                setLastScrollDirection("down");
                atEdgeTimeout = null;
              }, timeBetweenScrolls);
            }
          } else {
            el.scrollTop -= 1;
            if (atEdgeTimeout) {
              clearTimeout(atEdgeTimeout);
              atEdgeTimeout = null;
            }
          }
        }
      }, 50);
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
      if (atEdgeTimeout) {
        clearTimeout(atEdgeTimeout);
        atEdgeTimeout = null;
      }
    };

    if (!isUserInteracting) {
      startScrolling();
    }
    else stopScrolling();

    return () => {
      stopScrolling();
    };
  }, [isUserInteracting]);

  const convertDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };

  const fetchReviews = async () => {
    const snapshot = await getDocs(collection(db, "reviews"));
    const data = snapshot.docs.map((doc) => {
      const d = doc.data();
      return {
        ...d,
        id: doc.id,
        dateInt: d.date,
        date: convertDate(d.date),
      };
    });
    const sorted = data.sort((a, b) => b.dateInt - a.dateInt);
    setReviews(sorted);
  };

  const autoReload = () => {
    setTimeout(() => {
      fetchReviews();
      autoReload();
    }, 500);
  };

  useEffect(() => {
    fetchReviews();
    autoReload();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {


    if (!newReview.rating && newReview.rating > 0 && newReview.rating <= 5) {
      setErrorStars(true);
      return;
    } else {
      setErrorStars(false);
    }
    console.log('Submitting review:', newReview);

    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const review = {
        name: newReview.name,
        note: newReview.rating,
        message: newReview.comment,
        avatar: newReview.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
        date: new Date().getTime(),
        validated: false,
      };

      // await addDoc(collection(db, "reviews"), review);
      setNewReview({ name: "", rating: 0, comment: "" });
      await new Promise((r) => setTimeout(r, 500));
      fetchReviews();
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // const isScrollable = el.scrollHeight > el.clientHeight;
    setShowTopBlur(el.scrollTop > 0);
    setShowBottomBlur(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    handleScroll(); // call once on mount
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);


  const averageRating = reviews.length
    ? reviews.reduce((acc, review) => acc + review.note, 0) / reviews.length
    : 0;

  return (
    <section id="reviews" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Avis
            <span className="block text-2xl font-normal text-white/60 mt-2">Ce qu'ils en pensent</span>
          </h2>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center">
              <StarsBar rating={Math.round(averageRating)} interactive={false}></StarsBar>
              {/* {renderStars(Math.round(averageRating))} */}
            </div>
            <div className="text-white/60 mt-2">{reviews.length} avis</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des avis avec scroll automatique */}
          <div className="relative lg:col-span-2 p-2">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsUserInteracting(true)}
              onMouseLeave={() => setIsUserInteracting(false)}
              className="space-y-6 max-h-[500px] scrollbar-hide overflow-y-scroll pr-2"

              style={formHeight ? { maxHeight: formHeight } : {}}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-white/10">
                      <span className="text-white font-semibold text-sm">{review.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{review.name}</h4>
                        <span className="text-white/40 text-sm">{review.date}</span>
                      </div>
                      {/* {renderStars(review.note)} */}
                      <StarsBar rating={review.note} interactive={false}></StarsBar>

                      <p className="text-white/80 mt-3 leading-relaxed">{review.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Flou en haut */}
            {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm z-10 rounded-sm" /> */}

            <div className={`pointer-events-none absolute top-0 left-0 w-full h-[200px] backdrop-blur-sm z-10 rounded-bl-xl rounded-br-xl [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%)] transition-opacity duration-500 ${showTopBlur ? "opacity-100" : "opacity-0"}`} />
            <div className={`pointer-events-none absolute bottom-0 left-0 w-full h-[200px] backdrop-blur-sm z-10 rounded-tl-xl rounded-tr-xl [mask-image:linear-gradient(to_top,black_0%,transparent_60%)] transition-opacity duration-500 ${showBottomBlur ? "opacity-100" : "opacity-0"}`} />

            {/* Flou en bas */}
            {/* <div className={`pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-transparent backdrop-blur-sm z-10 rounded-tr-xl roudned-tl-xl transition-opacity duration-500 ${showBottomBlur ? "opacity-100" : "opacity-0"}`} /> */}
          </div>


          {/* Formulaire d'avis */}
          <div ref={inputRef} className="lg:col-span-1">
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
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Note</label>
                  {/* {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))} */}
                  <StarsBar rating={newReview.rating} interactive={true} onRate={(rating) => setNewReview({ ...newReview, rating })}></StarsBar>

                  {errorStars && <p className="text-red-500 text-sm mt-1">Veuillez sélectionner une note.</p>}
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Votre commentaire</label>
                  <TextareaAutosize
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows={4}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none h-auto"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
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
