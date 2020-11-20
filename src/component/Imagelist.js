import React from 'react'

const Imagelist = props =>{
    
    const images= props.images.map((image) => {
        return <>
                   <div style={{'margin':'20px'}}>
                    <img class="ui medium rounded image" src={image.urls.regular}  style={{'width':'200px','height':'200px'}}/>
                    </div> 
            </>
      
    })

    return(
        <div className="ui grid my-4 " style={{'width':'100%'}}>     
        {images}   
        </div>
    );
 
}

export default Imagelist;