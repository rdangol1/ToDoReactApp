// component to get the cureent date in desired format

const DateComponent = ({date = new Date(), ...props}) =>{
    const now = new Date(date);
    const ItemDate = JSON.parse(
        JSON.stringify(
        now.getFullYear() +
            "-" +
            (now.getMonth() + 1) +
            "-" +
            now.getDate() +
            " " +
            now.getHours() +
            ":" +
            now.getMinutes() +
            ":" +
            now.getSeconds()
        )
    );

    return( 
        <span {...props}>
            {ItemDate}
        </span>
       
    );
    
}
export default DateComponent;