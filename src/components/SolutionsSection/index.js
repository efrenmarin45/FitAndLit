import { SolutionsContainer, ProductTitle, SolutionOne, SolutionTwo, SolutionThree, SolutionFour, SolutionTextOne, SolutionButton } from './SolutionsElements';
import Tea from '../../img/tea.png';

const SolutionsSection = () => {
    return(
        <>
            <SolutionsContainer>
                <ProductTitle>Iaso Tea</ProductTitle>
                <SolutionOne>
                    <img className='productOne' src={Tea} alt="Iaso Tea"></img>
                    <SolutionTextOne>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextOne>
                    <SolutionButton>Learn More</SolutionButton>
                </SolutionOne>
                <SolutionTwo>
                test
                </SolutionTwo>
                <SolutionThree>
                test
                </SolutionThree>
                <SolutionFour>
                test
                </SolutionFour>
            </SolutionsContainer>
        </>
    )
}

export default SolutionsSection;