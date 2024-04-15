import SingleState from "./../components/SingleState";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { db } from "./../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import contextProvider from "./../components/contextProvider";

const FavoritesProperties = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = contextProvider();
//   console.log(user.uid);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, `favorite-properties-${user.uid}`);
        const querySnapshot = await getDocs(docRef);
        const favoritesData = [];
        querySnapshot.forEach((doc) => {
        //   console.log(doc);
          favoritesData.push({ id: doc.id, data: doc.data() });
        });
        // console.log(favoritesData);
        setFavorites(favoritesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-349px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  //   console.log(favorites);
  //   console.log(user);
  return (
    <div>
      <Helmet>
        <title>Wishlist | Nova Estate</title>
      </Helmet>

      {favorites.length == 0 ? (
        <div className="w-full min-h-[calc(100vh-349px)] flex items-center justify-center">
          <h1 className="text-3xl">No Data in Wishlist</h1>
        </div>
      ) : (
        <>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold font-poppins text-center my-14  text-gray-100">
            Wishlist Properties
          </h1>
          <div className="my-8 grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
            {favorites.map((favorite, i) => (
              <SingleState key={i} home={favorite.data}></SingleState>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesProperties;
