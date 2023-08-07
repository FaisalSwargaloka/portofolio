const NotFoundPage = () => {
    return ( 
        <>
            <div 
            style={{
                width:"100%",
                height:"100vh",
                backgroundColor:"black"
            }}
            >
                <div style=
                {{
                width:"100%",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                    <h1 style={{color:"rgb(3, 255, 255)",marginRight:"10px"}}>404</h1>
                    <h3 style={{color:"white"}}>Page Not Found</h3>
                </div>
            </div>
        </>
     );
}
 
export default NotFoundPage;