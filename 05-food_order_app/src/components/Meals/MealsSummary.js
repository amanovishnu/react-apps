import React from "react";

import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Food Delivered To You.</h2>
            <p>
                Chose your favorite meal from our broad selection of available meals
                and enjoy a Delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs !
            </p>
        </section>
    )
};

export default MealsSummary;
