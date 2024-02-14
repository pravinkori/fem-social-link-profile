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

            <p>{"Front-end developer and avid reader."}</p>

            <div className="card__socials">
               <ul>
                  <li>GitHub</li>
                  <li>Frontend Mentor</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
               </ul>
            </div>
         </div>
      </article>
   );
}

export default Card;
