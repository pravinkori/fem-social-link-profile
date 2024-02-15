/* eslint-disable react/prop-types */
import "../css/App.css";
import avatar from "../assets/images/avatar-jessica.jpeg";

function SocialButtons() {
   const socials = [
      "GitHub",
      "Frontend Mentor",
      "LinkedIn",
      "Twitter",
      "Instagram",
   ];

   return (
      <div className="card__socials">
         {socials.map((social) => (
            <button key={social}>{social}</button>
         ))}
      </div>
   );
}

function Card({ userName, location }) {
   return (
      <article className="card">
         <picture className="card__user-image" role="img">
            <img src={avatar} alt="user profile picture" />
         </picture>

         <div
            className="card__content"
            role="region"
            aria-labelledby="cardTitle"
         >
            <h1 className="card__title">{userName}</h1>

            <div className="card__location">{location}</div>

            <p className="card__user-bio">
               {"Front-end developer and avid reader."}
            </p>

            <SocialButtons />
         </div>
      </article>
   );
}

export default Card;
