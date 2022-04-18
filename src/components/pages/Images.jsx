import React from 'react';
import milkbottles from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangefruit from '../../assets/images/desktop/image-gallery-orange.jpg'
import cone from '../../assets/images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'

export const Images = () => {
  return (
    <div className="images-container">
        <div>
          <picture>
            <source media="(min-width:768px)" srcset={ milkbottles } />
            <img className='img-cfg' src={ milkbottles } alt="" />  
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width:768px)" srcset={ orangefruit } />
            <img className='img-cfg' src={ orangefruit } alt="" />
          </picture>
        </div>
        <div>
          <picture>
          <source media="(min-width:768px )" srcset={ cone } />
          <img className='img-cfg' src={ cone } alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width:768px  )" srcset={ sugarcubes } />
            <img className='img-cfg' src={ sugarcubes } alt="" />
          </picture>
        </div>

    </div>
  )
}
                                        