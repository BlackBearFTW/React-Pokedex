import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons";

function IconButton({title, icon, onClick}) {

 return (
     <button className="btn" onClick={onClick} title={title}>
         <FontAwesomeIcon icon={Icons[icon]} />
     </button>
 )
}

export default IconButton;