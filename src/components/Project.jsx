import { Container, Row,Col, Button } from "react-bootstrap"
import funitureImage from "../assets/profile/funiture.png"
import movieImage from "../assets/profile/movie.png"
import "./project.css"
import { motion,useInView ,useAnimation} from "framer-motion"
import { useEffect, useRef } from "react"

let easing = [0.6,-0.05,0.01,0.99]

const variantContainer = {
    show: {
        transition: {
            staggerChildern:2,
        }
    }
}

const item = {
    hidden: {opacity:0, y:75},
    show: {
        opacity:1,
        y:0,
        x:0,
        transition:{
            ease:'easeInOut',
            duration:2
        }
    }
}

const tittle = {
    hidden: {
    y:50,
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

const Project = () => {

    const ref = useRef(null);
    const isInView = useInView(ref,{ once:true })
    
    const mainControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible")
        }
    },[isInView])

    return ( 
        <>
        <motion.div className="bg-project" id="project" 
            ref={ref}
            initial="hidden"
            variants={variantContainer}
            exit="exit"
            whileInView="show"
        >
        <Container className="container-project">
            <motion.div className="title-project" 
            variant={tittle}
            >
            Project</motion.div>
            <Row xs={1} md={2}>
                <Col className="mt-4" xs={{order:'first'}}>
                        <motion.div 
                            className="wrapper-image-project" 
                            variants={item}
                            initial={{ opacity: 0 ,x: -100}}
                            animate={mainControl}
                            whileInView="show"
                        >
                            <img src={funitureImage} alt="" className="image-project"></img>
                        </motion.div>
                </Col>
                <Col className="mt-5" >
                    <motion.article className="text-project-funiture"
                        variants={item}
                        initial={{ opacity: 0 ,x: 100}}
                        animate={mainControl}
                        whileInView="show"
                    >
                        <h3>Bcom Funiture</h3>
                        <p>Bcom Funiture adalah app website belanja Online untuk product-product funiture.
                            dan di app website ini di lengkapi dengan authentikasi menggunakan firebase
                        </p>
                        <a href="https://bcom-funiture.vercel.app/"><Button className="btn-view" variant="info">View Demo</Button></a>
                    </motion.article>
                </Col>
            </Row >
            <Row className="mt-5" xs={1} md={2}>
                <Col >
                <motion.div 
                            className="wrapper-image-project"
                            variants={item}
                            initial={{ opacity: 0 ,x: -100}}
                            animate={mainControl}
                            whileInView="show"
                        >
                        <img src={movieImage} alt="" className="image-project"></img>
                        </motion.div>
                </Col>
                <Col className="mt-4">
                <motion.article 
                        className="text-project-funiture"
                         variants={item}
                         initial={{ opacity: 0 ,x: 100}}
                         animate={mainControl}
                         whileInView="show"
                        >
                        <h3>Bcom Movie</h3>
                        <p>Bcom Movie adlah website streaming film,dengan menggunakan api dari TMDB yang mana
                            bisa nonton kapan pun dimana kapun dengan mudah.
                        </p>
                        <a href="https://bcom-movie.vercel.app/"><Button className="btn-view" variant="info">View Demo</Button></a>
                    </motion.article>
                </Col>
            </Row>
        </Container>
        </motion.div>
        </>
     );
}
 
export default Project;
