import React from 'react';
import milkbottles from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangefruit from '../../assets/images/desktop/image-gallery-orange.jpg'
import cone from '../../assets/images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'

export const Images = () => {
  return (
    <div className="images-wrapper">
      <img src={ milkbottles } alt="" />
      <img src={ orangefruit } alt="" />
      <img src={ cone } alt="" />
      <img src={ sugarcubes } alt="" />
    </div>
  )
}
                                        