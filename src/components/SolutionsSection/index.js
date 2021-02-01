import { SolutionsContainer, ProductTitle, ProductTitleTwo, SolutionOne, SolutionTwo, SolutionThree, SolutionFour, SolutionTextOne, SolutionButton, SolutionButtonTwo, SolutionBladeLeft, SolutionBladeRight, SolutionTextTwo } from './SolutionsElements';
import Tea from '../../img/tea.png';
import Coffee from '../../img/delgadaCoffee.PNG';
import Drops from '../../img/resolutionDrops.PNG';
import NRG from '../../img/nrg.PNG';

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
                    <SolutionBladeLeft />
                </SolutionOne>
                <ProductTitleTwo>Delgada Coffee</ProductTitleTwo>
                <SolutionTwo>
                    <img className='productTwo' src={Coffee} alt="Delgada Coffee"></img>
                    <SolutionTextTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextTwo>
                    <SolutionButtonTwo>Learn More</SolutionButtonTwo>
                    <SolutionBladeRight />
                </SolutionTwo>
                <ProductTitle>Resolution Drops</ProductTitle>
                <SolutionThree>
                    <img className='productThree' src={Drops} alt="Resolution Drops"></img>
                    <SolutionTextOne>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextOne>
                    <SolutionButton>Learn More</SolutionButton>
                    <SolutionBladeLeft />
                </SolutionThree>
                <ProductTitleTwo id="nrgTitle">NRG</ProductTitleTwo>
                <SolutionFour>
                    <img className='productFour' src={NRG} alt="NRG Supplement"></img>
                    <SolutionTextTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextTwo>
                    <SolutionButtonTwo>Learn More</SolutionButtonTwo>
                </SolutionFour>
            </SolutionsContainer>
        </>
    )
}

export default SolutionsSection;