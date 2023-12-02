import css from "./HomePage.module.css"
import { NavLink } from "react-router-dom";
import { CARS_ROUTE } from "components/App";
const HomePage = () => {
  return(
  <div className={css.homeLayout}>
  <h1 className={css.mainTitle}> Car rental at favorable prices</h1>
  <p className={css.mainDescription}>Our service is designed to provide 
    our customers with the best cars at a fair price.</p>
  <section className={css.advantages}>
    <p className={css.advTitle}>We offer: </p>
    <ul className={css.advList}>
      <li className={css.advItem}>Fast service</li>
      <li className={css.advItem}>Guarantee of the quality of the offered cars</li>
      <li className={css.advItem}>Convenient payment methods</li>
    </ul>
  </section>
    <NavLink to={CARS_ROUTE} className={css.linkToCars}>
      Let's get started
    </NavLink>
  </div>
  ) ;
};
export default HomePage;
