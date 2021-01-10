import React from 'react'

import * as St from './styles'

const MusicPlaylist: React.FC = () => {
  return (
    <St.Container>
      <St.NameMusicContainer>
        <St.BlockName>
          <St.Description>Listen To Your Heart</St.Description>
          <St.Description>November Rain</St.Description>
          <St.Description>Colo De Menina</St.Description>
        </St.BlockName>
      </St.NameMusicContainer>
      <St.MusicListContainer>
        <St.MusicList>
          <St.Music
            allow="encrypted-media"
            frameBorder="0"
            src="https://open.spotify.com/embed/track/78TnMTAFmWUWWCgNXR7D3K"
          />

          <St.Music
            allow="encrypted-media"
            frameBorder="0"
            src="https://open.spotify.com/embed/track/3YRCqOhFifThpSRFJ1VWFM"
          />
          <St.Music
            allow="encrypted-media"
            src="https://open.spotify.com/embed/track/5aGhtbviqUqjtno5vcUmCN"
            frameBorder="0"
          />
        </St.MusicList>
      </St.MusicListContainer>
    </St.Container>
  )
}

export default MusicPlaylist
