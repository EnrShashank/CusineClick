import { IMG_CDN_URL } from "../config";


const ResturantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
    // above OR const ResturantCard = (props)
    // props paramter is used
   
    // Destructuring object : 
    //const{name,cuisines,cloudinaryImageId,avgRating}=resturant.data;
 
   return (
     <div className="card">
       <img
         src={
           IMG_CDN_URL +
          cloudinaryImageId
         }
       />
       <h2>{name}</h2>
       <h3>{cuisines.join(", ")}</h3>
       <h4>{avgRating} stars</h4>
     </div>
   );
 };

 export default ResturantCard;