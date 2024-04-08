import Warning from '../../components/warning/Warning'
import { IFrameYt, MainContainer } from './style'

const Home = () => {
  return (
    <MainContainer>
      <Warning /> 
      <IFrameYt>
        <iframe src="https://www.youtube.com/embed/ln6t3uyTveQ?si=yZIWTzBfp4g-G3Zp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>      
      </IFrameYt>
    </MainContainer>
  )
}

export default Home