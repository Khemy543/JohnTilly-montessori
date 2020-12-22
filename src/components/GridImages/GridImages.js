import React from 'react';
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: require('assets/img/empty-class1.jpg'),
        thumbnail: require('assets/img/empty-class1.jpg'),
        thumbnailWidth: 500,
        thumbnailHeight: 344
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        /* tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}], */
},
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}];

function GridImages(){
    return(
        <Gallery images={IMAGES}/>
    )
}

export default GridImages;