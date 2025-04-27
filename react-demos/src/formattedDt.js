function FormattedDate(props){
    
    return(
             <div>
                <h2>Current Date </h2>
                <p>{props.date.toLocaleString()} </p>
             </div>

    )


}
export default FormattedDate;