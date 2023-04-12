
import styles from './navbar-css/navbar.module.css'
import React from 'react';

const Navbar = () => {
  return (
    <div
      className={styles.navigation}
      
    >
      <div
        className={styles.NavContainer}

      >
        <div className="logo">
          <img src="BLK.png" alt="logo" style={{ height: "48px" }} />
        </div>
        <div
          className={styles.Aboutus}
        >
          About Us
        </div>
        <div
          className={styles.Features}

        >
          Features
        </div>
        <div
          className={styles.docs}

        >
          Optimos Docs
        </div>
        <div
          className={styles.Team}
          
        >
          Team
        </div>
        <div
          className={styles.FAQ}

        >
          FAQ
        </div>

        <div className={styles.twittericon} >
          <img src="twitter.png" alt="twitterico"
           />
        </div>
        <div className={styles.Discordicon} 
        >
          <img src="Discord.png" alt="Discordico" 
         
          />
        </div>
        <div className={styles.Arrowicon} >
          <img src="arrow.png" alt="arrowico" 

          />
        </div>
        <div className={styles.micon} >
          <img src="m.png" alt="mico"
          />
        </div>
        <div className={styles.messengericon} >
          <img src="messenger.png" alt="messengerico" 
          
          />
        </div>
    
        <div className={styles.linkedinicon}>
  <img src="linkedin.png" alt="lnkedinico" style={{ height:'18px', width:'18px' }} />
</div>


      </div>
    </div>
  );
};

export default Navbar;