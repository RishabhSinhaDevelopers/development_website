import React,{useState} from 'react';
import Img15 from '../assets/img15.png';
import Img16 from '../assets/img16.png';
import Img17 from '../assets/img17.jpeg';
import Img18 from '../assets/img18.jpeg';
import Img19 from '../assets/img19.jpeg';
import Img20 from '../assets/img20.jpeg';
import Img21 from '../assets/img21.jpeg';
import Img22 from '../assets/img22.jpeg';
import Img23 from '../assets/img23.jpeg';
import Img24 from '../assets/img24.jpeg';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

const Teamsupplier = () => {
    let data=[
        {
            id: 1,
            imgSrc: Img15,
        },
        {
            id: 2,
            imgSrc: Img16,
        },
        {
            id: 3,
            imgSrc: Img17,
        },
        {
            id: 4,
            imgSrc: Img18,
        },
        {
            id: 5,
            imgSrc: Img19,
        },
        {
            id: 6,
            imgSrc: Img20,
        },
        {
            id: 7,
            imgSrc: Img21,
        },
        {
            id: 8,
            imgSrc: Img22,
        },
        {
            id: 9,
            imgSrc: Img23,
        },
        {
            id: 10,
            imgSrc: Img24,
        },
    ]

    const [model, setModel]=useState(false);
    const [tempimgSrc, setTempImgSrc]=useState('');
    const getImg =(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model? "model open":"model"}>
            <img alt="" src={tempimgSrc} />
            <CloseIcon onClick={()=> setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="not loaded" style={{width: '100%', WebkitBorderRadius: '15px'}}/>
                    </div>
                        
                    
                )
            })}
        </div>
        </>
    )
}
export default Teamsupplier
