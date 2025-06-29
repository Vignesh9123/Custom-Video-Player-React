import  {MediaController, MediaControlBar, MediaPlayButton, MediaTimeRange, MediaTimeDisplay, MediaDurationDisplay} from 'media-chrome/react'
import {MediaSettingsMenu, MediaSettingsMenuItem, MediaPlaybackRateMenu, MediaSettingsMenuButton, MediaRenditionMenu} from 'media-chrome/react/menu'
import { MdSettings } from 'react-icons/md'
import HlsVideoElement from 'hls-video-element/react'
function App(){
  return (
    <div style={{display:"flex", justifyContent:"center", width:"100vw"}} >

    <MediaController style={{display:"flex", justifyContent:"center"}}>
  <HlsVideoElement height={500} width={900} playsInline crossOrigin={""} slot='media' src='https://video-transcode-9123-outputs.s3.ap-south-1.amazonaws.com/Pahalgam+%EF%BD%9C+Seema+haider+%EF%BD%9C+Indian+Media+%26+Creators!/master.m3u8' >
  <track default kind="chapters" src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/chapters.vtt"/>
  <track default kind="metadata" label="thumbnails" src="https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/storyboard.vtt"/>
    </HlsVideoElement>
  <img slot="poster" src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/superstar-rajinikanth-in-vettaiyan-movie-hd-images-115942308-16x9_0.jpg?VersionId=wLJRQZwQWjNlOU7MjHXqM_fyboMymo1d' decoding="async"/>
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
      {/* <MediaPreviewChapterDisplay/> */}
      <MediaSettingsMenuButton style={{}}>
        <div slot="icon" style={{height:"100%", width:"100%"}}>
            <MdSettings style={{height:"100%", width:"100%"}}/>
        </div>

      </MediaSettingsMenuButton>
    </MediaControlBar>
</MediaController>
    </div>
  )
}

export default App