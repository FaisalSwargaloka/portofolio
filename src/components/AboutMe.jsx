import { Container } from "react-bootstrap";
import "./aboutme.css"
import { easeOut, motion, useInView , useAnimation} from "framer-motion";
import { useRef , useEffect} from "react";

let easing = [0.6,-0.05,0.01,0.99]

const variantContainer = {
    show: {
        transition: {
            staggerChildern:2,
        }
    }
}

const item = {
    hidden: {opacity:0, y:20},
    show: {
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:2
        }
    }
}

const tittle = {
    hidden: {
    y:20,
    opacity:0,
},
show: {
    y:0,
    opacity:1,
    transition: {
        delay:2,
        duration:0.6,
        ease:easing
    }
    }

}

const AboutMe = () => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();

    useEffect(() => {
       if (isInView) {
        mainControl.start("visible")
       }
    },[isInView])

    return ( 
        <>
              <div className="bg-about" >
            <Container >
                <motion.div className="text-about" 
                initial="hidden"
                variants={variantContainer}
                exit="exit"
                whileInView="show"
                id="about"
                >
                    <motion.article className="article-about"  ref={ref}>
                    <motion.h1 
                    variants={tittle}
                    animate={mainControl}
                    >
                        About</motion.h1>
                        <motion.p
                            variants={item}
                            initial={{ opacity: 0, y:30}}
                            animate={mainControl}
                            transition={{duration:0.5,ease:easeOut,delay:0.5}}
                            whileInView="show"
                        >
                            Hallo,saya faisal swargaloka saya berusia 20 thn,saya sebagai seorang Junior Front End Developer yang bersemangat dan berdedikasi, 
                            saya memiliki hasrat yang kuat terhadap dunia pengembangan web. Saya percaya bahwa teknologi adalah kekuatan untuk membentuk masa depan, 
                            dan saya selalu berusaha untuk menciptakan pengalaman web yang menarik dan inovatif bagi pengguna.
                            Dalam perjalanan saya sebagai seorang Junior Front End Developer, saya telah memperoleh pemahaman yang kuat tentang HTML, CSS, dan JavaScript, serta framework front-end populer seperti React. 
                            Saya memiliki kemampuan untuk merancang dan mengimplementasikan antarmuka pengguna yang responsif dan menarik, dengan memastikan bahwa desain yang saya buat selalu mengutamakan kegunaan dan aksesibilitas.
                            Saya memiliki kemampuan dalam mengintegrasikan data dari API untuk menciptakan aplikasi web yang dinamis dan interaktif. Saya juga selalu berupaya untuk meningkatkan kecepatan dan kinerja situs web dengan 
                            mengoptimalkan kode dan mengikuti praktik terbaik dalam pengembangan front-end.
                            Selain keahlian teknis, saya juga memiliki kemampuan untuk bekerja secara kolaboratif dalam tim, berkomunikasi dengan baik, dan mengatasi tantangan dengan kreativitas dan solusi yang inovatif. Saya selalu 
                            terbuka untuk belajar hal-hal baru dan beradaptasi dengan perkembangan teknologi terkini.
                            Dalam portofolio ini, Anda akan menemukan berbagai proyek yang saya kerjakan selama menjadi Junior Front End Developer. Setiap proyek mencerminkan dedikasi saya untuk menciptakan solusi yang menarik, 
                            fungsional, dan memberikan dampak positif bagi pengguna.
                            Saya berharap bahwa dengan portofolio ini, Anda dapat melihat potensi saya sebagai seorang Junior Front End Developer yang berkembang, dan saya sangat antusias untuk berkontribusi dalam proyek-proyek 
                            menarik di masa depan dan terus memperluas keterampilan saya di dunia pengembangan web. Terima kasih telah meluangkan waktu untuk melihat portofolio saya.
                            </motion.p>
                    </motion.article>
                </motion.div>
            </Container>
            </div>
        </>
     );
}
 
export default AboutMe;