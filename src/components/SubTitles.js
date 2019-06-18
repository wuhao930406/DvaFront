const SubTitles = ({...props}) =>{

    return (
        <div>
            <h2 style={{
                fontSize:24,
                fontWeight:"lighter",
                color:"#333",
                ...props.tstyle,
            }}>
               {props.title}
           </h2>
           <div style={{
                height:1,
                width:30,
                backgroundColor:"#000",
                marginBottom:18,
                ...props.lstyle,
            }}>
           </div>
           {
            props.desc&&<p style={{
                fontSize:18,
                color:"#999",
                fontWeight:"lighter",
                ...props.dstyle,
            }}>
               {props.desc}
           </p>

           }
       


        </div>
    )



}
export default SubTitles