import Image from 'next/image';
import logo from '../../../public/logo.png';
import styles from '../../styles/Footer.module.css';


function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerGrid}>
         <div className={styles.NestedGrid}>
            <div>
                <Image className={styles.NestedGridLogo}
                            src="/images/phone.png" 
                            width={25}
                            height={25}
                            alt="Hero Content Center"/>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>+974 3118 1843</p>
                </div>
         </div>
         <div className={styles.NestedGrid} >
         <div >
                <Image className={styles.NestedGridLogo}
                            src="/images/email.png" 
                            width={25}
                            height={25}
                            alt="Hero Content Center"/>
                </div>
                <div>
                    <h3>Email Address</h3>
                    <p>Elbrithcqhr@gmail.com</p>
                </div>
         </div>
         <div className={styles.NestedGrid}>          
              <div>
                <Image className={styles.NestedGridLogo}
                            src="/images/location.png" 
                            width={25}
                            height={25}
                            alt="Hero Content Center"/>
                </div>
                <div>
                    <h3>Office Location</h3>
                    <p>  Ambassador Street, Zone 61,</p>
                </div></div>

            <div> <Image src="/logo.png" alt="PHARMACY" width={200} height={50} /></div>
            <div className={styles.footerLogoRow}><p>Your health, physical and emotional well-being is important
to us. We are always by your side and have made it even
easier for you to find the necessary vitamins.</p></div>
<div></div>
<div className={styles.fotterEnd}>
    <div><Image src="/images/location-icon.png" alt="PHARMACY" width={20} height={20} /></div>
<div><p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p> </div>
</div>
</div>
    </div>
  );
}

export default Footer;