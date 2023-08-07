
const Footer = () => {
    return ( 
        <>
        <div className="footer-bg">
            <footer style={{
                width:"100%",
                height:"5vh",
                backgroundColor:"darkslategray",
                color:"white",
                textAlign:"center",
                padding:"5px"
            }}>
                <p>
                    @{new Date().getFullYear()} faisalswargaloka codeInn. All right reverse.
                </p>
            </footer>
            </div>
        </>
     );
}
 
export default Footer;