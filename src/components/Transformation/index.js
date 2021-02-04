import { TopTitle, TransformationContainer, TransformWrapper, TransformOne, TransformTwo, TransformText } from './TransformationElements';
import ImgOne from '../../img/TransformOne.png';
import ImgTwo from '../../img/TransformTwo.png';
import Waves from '../../img/waveStart.png';

const TransformationSection = () => {
    return(
        <>  
            <TransformationContainer id="transformations">
                <img className="waveBreakStart" src={Waves} />
                <TopTitle>Real World Transformations</TopTitle>
                <TransformWrapper>
                    <TransformOne>
                        <img className="transformImg" src={ImgOne} alt="Transformation Image"></img>
                        <TransformText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, gravida quisque elit, ut. Neque, bibendum lorem magna leo egestas egestas. Vitae duis lorem quam quis risus facilisi hac phasellus auctor.
                        </TransformText>
                    </TransformOne>
                    <TransformTwo>
                        <img className="transformImg" src={ImgTwo} alt="Transformation Image"></img>
                        <TransformText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, gravida quisque elit, ut. Neque, bibendum lorem magna leo egestas egestas. Vitae duis lorem quam quis risus facilisi hac phasellus auctor.
                        </TransformText>
                    </TransformTwo>
                </TransformWrapper>
            </TransformationContainer>
        </>
    )
}

export default TransformationSection;