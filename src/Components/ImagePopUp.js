
import './Popup.css'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function ImagePopUp({trigger, setTrigger, image}) {
  
  const closePopup = () => {
    setTrigger(false)
  }

    
  return (trigger) ? (
    <div>
      
    <div class="popup" >
      <div class="mask" onClick={() => closePopup()}></div>     {/*close popup when click outside */}
        <div class="popup-inner">
          <TransformWrapper alignmentAnimation={{sizeX: -1, sizeY: -1}}>      {/*Image zoom on popup and recenter after zoomout*/}
            <TransformComponent>
              <img src={image} alt="Popped up image" class="popped" />
            </TransformComponent>
          </TransformWrapper>
        </div> 
        
    </div>
    
    </div>
    
    
  ) : null
}

export default ImagePopUp