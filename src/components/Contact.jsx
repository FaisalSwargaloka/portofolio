import { Button, Container, Form, } from "react-bootstrap";
import { motion,useAnimation,useInView } from "framer-motion";
import { useEffect,useRef } from "react";
import "./contact.css"


let easing = [0.6,-0.05,0.01,0.99]

const item = {
    hidden: {opacity:0},
    show: {
        opacity:1,
        scale:1,
        x:1,
        y:1,
    }
}
const Contact = () => {

    const ref = useRef ()
    const inView = useInView(ref, { once: true})
    const mainControl = useAnimation()

    useEffect(() => {
        if(inView) {
            mainControl.start("visible")
        }
    },[inView])


    return ( 
    <>
    <div className="bg-contact" ref={ref} id="contact">
    <Container className="container-contact">
        <div className="title-contact">Contact</div>
        <motion.section 
            className="section-form" 
            variants={item}
            initial={{ opacity: 0,scale: 0.9 }}
            animate={mainControl}
            whileInView="show"
            transition={{duration:1,ease:easing,delay:0.9}}
        >
        <Form className="form-contact">
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="input-form" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control className="input-form" type="email" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control className="input-pesan" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="info" className="btn-submit"type="submit">
             Submit
             </Button>
        </Form>
        </motion.section>
    </Container>
    </div>
</>
     );
}
 
export default Contact;