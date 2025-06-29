import  {MediaController, MediaControlBar, MediaPlayButton, MediaTimeRange, MediaTimeDisplay, MediaDurationDisplay, MediaLoadingIndicator, MediaPreviewChapterDisplay} from 'media-chrome/react'
import {MediaSettingsMenu, MediaSettingsMenuItem, MediaPlaybackRateMenu, MediaSettingsMenuButton, MediaRenditionMenu} from 'media-chrome/react/menu'
import {MediaActionTypes, useMediaDispatch, useMediaRef, useMediaSelector} from 'media-chrome/react/media-store'
import { MdSettings } from 'react-icons/md'
import HlsVideoElement from 'hls-video-element/react'
function App(){
  const dispatch = useMediaDispatch()
  const mediaRef = useMediaRef();
  const jumpto20 = ()=>{
    const type = MediaActionTypes.MEDIA_SEEK_REQUEST
    dispatch({type, detail:20})
  }

  const switchToQuality = (id:string)=>{
    const type = MediaActionTypes.MEDIA_RENDITION_REQUEST
    dispatch({type, detail:id})
  }
  
  return (
    <>
    <div style={{display:"flex", justifyContent:"center", width:"100vw"}} >
     
    <MediaController  style={{display:"flex", justifyContent:"center"}}>
  <HlsVideoElement ref={mediaRef} height={500} width={900} playsInline crossOrigin={""} slot='media' src='https://video-transcode-9123-outputs.s3.ap-south-1.amazonaws.com/cma6nwtlq000295jg9fxeot80/master.m3u8' >
  <track default kind="chapters" src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/chapters.vtt"/>
  <track default kind="metadata" label="thumbnails" src="https://video-transcode-9123-outputs.s3.ap-south-1.amazonaws.com/Pahalgam+%EF%BD%9C+Seema+haider+%EF%BD%9C+Indian+Media+%26+Creators!/storyboard.vtt"/>
    </HlsVideoElement>
  <img slot="poster" src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/superstar-rajinikanth-in-vettaiyan-movie-hd-images-115942308-16x9_0.jpg?VersionId=wLJRQZwQWjNlOU7MjHXqM_fyboMymo1d' decoding="async"/>
  <MediaLoadingIndicator slot="centered-chrome" noAutohide />
<MediaSettingsMenu  anchor='auto' hidden>
    <MediaSettingsMenuItem>
      Speed
      <MediaPlaybackRateMenu slot='submenu' hidden><div slot='title'>Speed</div></MediaPlaybackRateMenu>
    </MediaSettingsMenuItem>
    <MediaSettingsMenuItem>
      Quality
      <MediaRenditionMenu slot='submenu' hidden><div slot='title'>Quality</div></MediaRenditionMenu>
    </MediaSettingsMenuItem>

</MediaSettingsMenu>
    <MediaControlBar>
      <MediaPlayButton>

      
      </MediaPlayButton>
      <MediaTimeDisplay/>
      <MediaTimeRange/>
      <MediaDurationDisplay/>
      <MediaSettingsMenuButton style={{}}>
        <div slot="icon" style={{height:"100%", width:"100%"}}>
            <MdSettings style={{height:"100%", width:"100%"}}/>
        </div>

      </MediaSettingsMenuButton>
    </MediaControlBar>
      <MediaPreviewChapterDisplay/>
</MediaController>
    </div>
    <div style={{width:'70vw', margin:'auto'}}>

<button onClick={jumpto20}>Jump to 20</button>
<button onClick={()=>switchToQuality('0')}>Switch to 360</button>
<button onClick={()=>switchToQuality('1')}>Switch to 480</button>
<button onClick={()=>switchToQuality('2')}>Switch to 720</button>
    </div>
    </>
  )
}

export default App