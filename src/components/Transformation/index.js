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
                        Lucy struggled with a constant yo-yo effect with her weight and tried a lot of fad diets before finding her solution. Now she's lost over 50 pounds and has more energy for her day.
                        </TransformText>
                    </TransformOne>
                    <TransformTwo>
                        <img className="transformImg" src={ImgTwo} alt="Transformation Image"></img>
                        <TransformText>
                        Angie had accepted that she would not be able to lose her weight, then she found her solution. Now she's lost over 80 pounds and it's stayed off. Now she lives a healthier life and her mood and sleep have improved.
                        </TransformText>
                    </TransformTwo>
                </TransformWrapper>
            </TransformationContainer>
        </>
    )
}

export default TransformationSection;