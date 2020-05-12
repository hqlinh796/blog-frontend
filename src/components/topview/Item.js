import React from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../rightbaritem/Index.css';



const TopViewItem = (props) => {

    const { title, cover, _id, views } = props.data;
    // const [imgLoaded, setImgLoaded] = useState(false);

    // useEffect(() => {
        
    // })

    // const changeImage =  (src) => {
    //     const img = document.createElement('img');
    //     img.src = src;
    //     // img.addEventListener('load', async () => {
    //     //     return img;
    //     // })
    //     return ;
    // }

    
    return (
        <div className="top-post-detail right-bar-item flex flex-a-c m-b-25">
            <img src={cover} alt={title} />
            <div className="right-bar-item-text m-l-20 lh-15">
                <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + toSlug(title) + '.' + _id} title={title}>
                    {title}
                </Link>
                <p className="fc-2 fs-14">

                    <span>{views}</span>
                    <span>{views <= 1 ? ' view' : ' views'}</span>
                </p>
            </div>
        </div>
    );

}

export default TopViewItem;