import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import styles from '../styles/MainPage.module.css';



export function MainPage() {

    return (
        <>
            <div className={styles.heroContainer}>
                <Navbar />
                <div className={styles.heroSection}>
                    <h1>Essential Vitamins</h1>

                    <div className={styles.heroSectionGrid}>
                        <div className={styles.heroSectionLeftGrid}>
                            <p>Online medical supplies</p>
                            <h2>Get your Vitamins <br /> & Minerals</h2>
                            <button>Explore</button>
                        </div>
                        <div>
                            <div className={styles.imageBackgroundDiv}>   
                                   <Image
                                    className={styles.heroSectionImage}
                                    src="/images/hero-content-center.png" 
                                    width={400}
                                    height={400}
                                    alt="Hero Content Center"
                                />
                            </div>

                        </div>
                        <div className={styles.heroSectionRightGrid}>
                            <div className={styles.heroSectionRightGridNested}> 
                            <div>
                            <Image
                            className={styles.heroSectionRightGridNestedImage}
                            src="/images/hero-content-weight-loss.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            </div>
                            <div><h2>Vitamins</h2>
                            <h3>increased Vitamins and <br/>minerals in your diet</h3>
                            </div>
                            </div>
                            <div className={styles.heroSectionRightGridNested}>
                            <div>
                            <Image
                            className={styles.heroSectionRightGridNestedImage}
                            src="/images/hero-content-weight-loss.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/></div>
                            <div><h2>Weight Loss</h2>
                            <h3> Weight Loss<br/>Find scientifically proven solutions</h3>
                            </div>
                            </div>
                            <div className={styles.heroSectionRightGridNested}>
                            <div> 
                          <Image
                            className={styles.heroSectionRightGridNestedImage}
                            src="/images/hero-content-functional-foods.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            </div>
                            <div><h2>Vitamins</h2>
                            <h3>Functional Foods<br/>From protein powers to baby formula</h3>
                            </div>
                            <div>
                            
                            </div>
                      
                            </div>
                        </div>
                    </div>

                </div>
          

                <div className={styles.middleContainer}>
                    <div className={styles.middleContainerGrid}>
                        <div className={styles.middleContent}>
                        <Image
                            className={styles.middleContentImage}
                            src="/images/clinicallytested-icon.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            <h2>clinically studied</h2>
                            <p>All products that we offer have
                            undergone lab and safety tests</p>
                        </div>
                        <div className={styles.middleContent}>
                        <Image
                            className={styles.middleContentImage}
                            src="/images/Vegetarian-Friendly.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                        <h2>Vegetarian Friendly</h2>
                        <p>We have a wide selection of vegetarian
                        products to meet your needs</p>
                        </div>
                        <div className={styles.middleContent}>
                        <Image
                            className={styles.middleContentImage}
                            src="/images/madeInIndia-Icon.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            <h2>Made In India</h2>
                            <p>Shop local and explore health products
                            made right here in India</p>
                        </div>
                        <div className={styles.middleContent}>
                            <Image
                            className={styles.middleContentImage}
                            src="/images/Free-shipping.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            <h2>Free shipping</h2>
                            <p>We deliver to your door with no
                            shipping costs on your orders</p>
                            </div>
                        <div className={styles.middleContent}>
                        <Image
                            className={styles.middleContentImage}
                            src="/images/No-Risk.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            <h2>No Risk</h2>
                            <p>We ensure that all products are safe
                            and within their use-by date</p>
                        </div>
                        <div className={styles.middleContent}>
                        <Image
                            className={styles.middleContentImage}
                            src="/images/GMO-free.png" 
                            width={50}
                            height={50}
                            alt="Hero Content Center"/>
                            <h2>GMO free</h2>
                            <p>Natural, no modified products and
                            derivatives for those who need it</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.CardContainer}>
              <div className={styles.CardContent}>
              <h2>INGREDIENTS</h2>
              <h1>Better Ingredients</h1>
              <p>Only the best when you choose products offered on our platform high-quality 
              ingredients for high quality products!</p>
                </div>
               <div><a href="/"><Image
                            className={styles.middleContainerGridImage}
                            src="/images/Vitamin-C.png" 
                            width={300}
                            height={300}
                            alt="Hero Content Center"/> </a></div> 
               <div><a href="/"><Image
                            className={styles.middleContainerGridImage}
                            src="/images/Vitamin-B3.png" 
                            width={300}
                            height={300}
                            alt="Hero Content Center"/></a></div> 
                            <div className={styles.middleContainerGrid2}>
                            <div><a href="/">
                            <Image
                            className={styles.middleContainerGridImage}
                            src="/images/Magnesium.png" 
                            width={300}
                            height={300}
                            alt="Hero Content Center"/>
                            </a>
                            </div>
                            <div><a href="/">
                            <Image
                            className={styles.middleContainerGridImage}
                            src="/images/Hyaluronic-Acid.png" 
                            width={300}
                            height={300}
                            alt="Hero Content Center"/>
                           </a>
                            </div>
                            <div><a href="/">
                            <Image
                            className={styles.middleContainerGridImage}
                            src="/images/Lactobacillus.png" 
                            width={300}
                            height={300}
                            alt="Hero Content Center"/>
                            </a>
                            </div>
                            <div><a href="/">
                            <Image 
                            className={styles.middleContainerGridImageBanner}
                            src="/images/middle-container-banner-edge.png" 
                            width={80}
                            height={80}
                            alt="Hero Content Center"/>
                            </a>
                            </div>
                            </div>
             </div>
             <div className={styles.bottomContainerHeader}>
              <h3>Our Blog</h3>
              <h1>Latest news</h1>
            </div>
  <div className={styles.bottomSection}>
  {[
    '/images/blog1.png',
    '/images/blog2.png',
    '/images/blog3.png',
    '/images/blog4.png',
    '/images/blog5.png',
    '/images/blog6.png',
    '/images/blog7.png',
    '/images/blog8.png',
  ].map((src, index) => (
    <Image
      key={index}
      className={styles.bottomContainerImage}
      src={src}
      width={300}
      height={300}
      alt="Hero Content Center"
    />
  ))}
</div>
<div>
  <Footer/>
</div>
</>
    );
}

export default MainPage;
