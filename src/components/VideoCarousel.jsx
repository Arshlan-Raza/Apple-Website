import { useRef, useState } from 'react'
import {hightlightsSlides} from '../constants'

const VideoCarousel = () => {

    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const vidoeDivRef = useRef([]);

    const [vidoe,setVidoe] = useState({
        isEnd:false,
        startPlay:false,
        vidoeId:0,
        isLastVideo:false,
        isPlaying:false,
    })

    const{isEnd,isLastVideo,startPlay,vidoeId,isPlaying} = video ;



  return (
    <>
        <div className="flex items-center">
            {hightlightsSlides.map((list) => (
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black '>
                            <video 
                            id='video' playsInline={true} preload='auto' muted  >
                                <source src={list.video} type='video/mp4'/>
                            </video>
                        </div>

                        <div className='absolute top-12 left-[5%] z-10'>
                            {list.textLists.map((text) =>(
                                <p key={text} className='sm:text-2xl text-xl font-medium'> {text}</p>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </div>

    </>
  )
}

export default VideoCarousel