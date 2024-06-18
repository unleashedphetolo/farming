import React from 'react';
import styles from './OpportunitiesSection.module.css'; // Import CSS module for scoped styling
import CommercialFarming from '../images/CommercialFarming.jpg'; // Import CSS module for scoped styling
import ConnectingFarmers from '../images/connecting.webp'; 
import Growth from '../images/Growth.jpg'; 
import Investment from '../images/ImpactInvesting.jpeg'; 



const OpportunitiesSection = () => {
  return (
    <section className={styles.opportunities}>
      <div className={styles.opportunities__img}>
        <img src={CommercialFarming} alt="Commercial Farming" />
      </div>
      <div className={styles.opportunities__content}>
        <div className={styles.opportunities__head}>
          <h2 className={styles.opportunities__title}>Farm using High Technology</h2>
          <p className={styles.opportunities__description}>
          Fresh farm products directly from our farm to your table.
          </p>
        </div>
        <div className={styles.opportunities__body}>
          <div className={styles.opportunity}>
            <img src={ConnectingFarmers} alt="Connect with our farmers" className={styles.opportunity__icon} />
            <h4 className={styles.opportunity__title}>Connect with our farmers</h4>
            <p className={styles.opportunity__description}>
            Connecting with farmers can be a rewarding and enlightening experience, fostering a deeper understanding of agriculture, supporting local economies, and promoting sustainable practices. 
            </p>
          </div>
          <div className={`${styles.opportunity} ${styles.active}`}>
            <img src={Growth} alt="Grow your business" className={styles.opportunity__icon} />
            <h4 className={styles.opportunity__title}>Grow your business</h4>
            <p className={styles.opportunity__description}>
            Growing a business involves a combination of strategic planning, market analysis, customer engagement, and continuous improvement.
            </p>
          </div>
          <div className={styles.opportunity}>
            <img src={Investment} alt="Social Impact Investment" className={styles.opportunity__icon} />
            <h4 className={styles.opportunity__title}>Social Impact Investment</h4>
            <p className={styles.opportunity__description}>
            Social impact investment, also known as impact investing, refers to investments made with the intention of generating positive, measurable social and environmental impact alongside a financial return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpportunitiesSection;
