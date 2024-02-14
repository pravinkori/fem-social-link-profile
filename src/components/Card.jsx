import "../css/App.css";
import avatar from "../assets/images/avatar-jessica.jpeg";

function Card() {
   return (
      <article className="card">
         <picture className="card__user-image">
            <img src={avatar} alt="user profile picture" />
         </picture>

         <div className="card__content">
            <h1 className="card__title">Jessica Randall</h1>

            <div className="card__location">London, United Kingdom</div>

            <p className="card__user-bio">
               {"Front-end developer and avid reader."}
            </p>

            <div className="card__socials">
               <button>GitHub</button>
               <button>Frontend Mentor</button>
               <button>LinkedIn</button>
               <button>Twitter</button>
               <button>Instagram</button>
            </div>
         </div>
      </article>
   );
}

export default Card;
