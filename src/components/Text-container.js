import '../Css/Text-container.css'
function Text_container(props)
{
    return (
    <div className = "Text-container" id = "text-container">
        <div className = "text-title">{props.textTitle}</div>
        <div className = "text-body">{props.textBody}</div>
        <div className = "text-body">{props.textBody2}</div>
        <div className = "text-body">{props.textBody3}</div>
        <div className = "text-body">{props.textBody4}</div>
        <div className = "text-body">{props.textBody5}</div>
        
    </div>
    );
};
  
Text_container.defaultProps = 
{
    textTitle: "Add Text Here", 
    textBody: "Add Text Here", 
    textBody2: "Add Text Here",
    textBody3: "Add Text Here",
    textBody4: "Add Text Here",
    textBody5: "Add Text Here"
};
export default Text_container;