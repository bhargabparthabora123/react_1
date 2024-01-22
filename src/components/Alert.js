import React from "react";
//here props.alert has been logically anded with the div tag of the alert popup, because the default value of alert is taken as null so 
//if we 'and' ,then first props.alert will be evaluated if it is true or false .since it is null it means it is false and will not go farther .but if it come out to be true then it will return the div tag part to the development  server 
//***************this happens because all the JSX will be converted to javascript calls******** 
function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    
       props.alert &&  <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
            <strong> {capitalize  (props.alert.type)}</strong>:{props.alert.msg}
      
          
        </div>
        
  );
}

export default Alert;
