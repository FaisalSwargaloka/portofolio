import { Col, Container, Row, Stack } from "react-bootstrap";
import imgPortofolio from "./assets/profile/imgPortofolio.png"
import "./home.css"
import {FaReact,FaBootstrap} from "react-icons/fa"
import {SiJavascript,SiHtml5,SiCss3} from "react-icons/si"
import { motion,useAnimation,useInView} from "framer-motion";
import { useEffect, useRef } from "react";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";

let easeing = [0.6,-0.05,0.01,0.99]

const item = {
    hidden: {opacity:0},
    show: {
        opacity:1,
        scale:1,
        x:1,
        y:1,
    }
}


const Home = () => {
    
    const ref = useRef(null);
    const InView = useInView(ref, { once: true })
    const mainControl = useAnimation();

    useEffect (() => {
        if (InView) {
            mainControl.start("visible")
        }
    },[InView])

    return (
        <>
        <div className="bg">
        <div className="bg-home"  id="home" ref={ref}>
        <Container fluid className="container-home">
            <Row className="row-home">
                <Col xs={{order:'first'}}>
                    <section className="section-left">
                        <motion.div className="text-home"
                        >
                            <motion.h1 
                                variants={item}
                                initial={{ opacity: 0,scale: 0.5 }}
                                animate={mainControl}
                                whileInView="show"
                                transition={{duration:0.9,ease:easeing,delay:0.5}}
                            >Helloo,I'm</motion.h1>
                            <motion.h4
                               variants={item}
                               initial={{ opacity: 0,scale: 0.5 }}
                               animate={mainControl}
                               whileInView="show"
                               transition={{duration:0.5,ease:easeing,delay:0.7}}
                            >Faisal</motion.h4>
                            <motion.h3
                            variants={item}
                            initial={{ opacity: 0,scale: 0.5 }}
                            animate={mainControl}
                            whileInView="show"
                            transition={{duration:0.5,ease:easeing,delay:0.9}}
                            >Junior Front-end Developer</motion.h3>
                            <motion.div className="skill"
                                variants={item}
                                initial={{ opacity: 0,scale: 0.5 }}
                                animate={mainControl}
                                whileInView="show"
                                transition={{duration:0.5,ease:easeing,delay:1}}
                            >
                                <h2>Tech :</h2>
                                <Stack direction="horizontal"gap={5}>
                                <span className="span-skill"><SiHtml5 size={30} color="#FF5C00"/></span>
                                <span className="span-skill"><SiCss3 size={30} color="#0060FF"/></span>
                                <span className="span-skill"><SiJavascript size={30} color="#FFEF00"/></span>
                                <span className="span-skill"><FaBootstrap size={35} color="rgb(162,25,255)"/></span>
                                <span className="span-skill"><FaReact size={30} color="rgb(0,255,255)"/></span>
                                </Stack>
                            </motion.div>
                        </motion.div>
                    </section>
                </Col>
                <Col xs={{order:'Last'}}>
                <section className="section-right">
                            <motion.div className="image-baground-1"
                            variants={item}
                            initial={{ opacity: 0,x:100 }}
                            transition={{duration:1,ease:easeing,delay:0.25}}
                            animate={mainControl}
                            whileInView="show"
                            >
                                <img src={imgPortofolio} alt="" className="image-home" 
                                />
                            </motion.div>
                    </section>
                </Col>
            </Row>
        </Container>
        </div>
        <AboutMe />
        <Project />
        <Contact />    
        
        </div>
        </>
    );
}

export default Home;