import styles from "./Card.module.css";
import avatar from "/src/assets/images/avatar-jessica.jpeg";

function SocialButtons() {
   const socials = [
      "GitHub",
      "Frontend Mentor",
      "LinkedIn",
      "Twitter",
      "Instagram",
   ];

   return (
      <div className={styles.card__socials}>
         {" "}
         {socials.map((social) => (
            <button key={social}>{social}</button>
         ))}
      </div>
   );
}

function Card({ userName, location }) {
   return (
      <article className={styles.card}>
         <picture className={styles["card__user-image"]} role="img">
            <img src={avatar} alt="user profile picture" />
         </picture>

         <div
            className={styles.card__content}
            role="region"
            aria-labelledby="cardTitle"
         >
            <h1 className={styles.card__title}>{userName}</h1>
            <div className={styles.card__location}>{location}</div>
            <p className={styles["card__user-bio"]}>
               {"Front-end developer and avid reader."}
            </p>
            <SocialButtons />
         </div>
      </article>
   );
}

export default Card;
