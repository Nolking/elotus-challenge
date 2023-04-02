import { Image, ImageProps } from 'antd';
import React from 'react';

const MyImage : React.FC<ImageProps> = (props: ImageProps) =>{
    const newProps = {
        variant: "myImage"
    }
    props = {...props, ...newProps}
    if (props.src?.includes("null") || props.src?.includes("undefined")) {
        props.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    }  
    return (
        <Image {...props} className="fade-in my-image"  height={"100%"}>
        </Image>
    )
}
export default MyImage;