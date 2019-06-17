const SubTitles = ({...props}) =>{

    return (
        <div>
            <h2 style={{
                fontSize:26,
                color:"#333",
                ...props.tstyle,
            }}>
               {props.title}
           </h2>
           <div style={{
                height:2,
                width:30,
                backgroundColor:"#000",
                marginBottom:18,
                ...props.lstyle,
            }}>
           </div>
           <p  style={{
                fontSize:18,
                color:"#999",
                ...props.dstyle,
            }}>
               {props.desc}
           </p>


        </div>
    )



}
export default SubTitles