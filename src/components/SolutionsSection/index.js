import { SolutionsContainer, ProductTitle, ProductTitleTwo, SolutionOne, SolutionTwo, SolutionThree, SolutionFour, SolutionTextOne, SolutionButton, SolutionButtonTwo, SolutionBladeLeft, SolutionBladeRight, SolutionTextTwo, } from './SolutionsElements';
import Tea from '../../img/tea.png';
import Coffee from '../../img/delgadaCoffee.PNG';
import Drops from '../../img/resolutionDrops.PNG';
import NRG from '../../img/nrg.PNG';

const SolutionsSection = () => {
    return(
        <>
            <SolutionsContainer id="solutions">
                <ProductTitle>Iaso Tea</ProductTitle>
                <SolutionOne>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=152UB#reviews">
                    <img className='productOne' src={Tea} alt="Iaso Tea"></img></a>
                    <SolutionTextOne>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextOne>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=152UB#reviews">
                    <SolutionButton>Learn More</SolutionButton></a>                    
                    <SolutionBladeLeft />
                </SolutionOne>
                <ProductTitleTwo>Delgada Coffee</ProductTitleTwo>
                <SolutionTwo>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=162&countryCode=US">
                    <img className='productTwo' src={Coffee} alt="Delgada Coffee"></img></a>
                    <SolutionTextTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextTwo>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=162&countryCode=US">
                    <SolutionButtonTwo>Learn More</SolutionButtonTwo></a>
                    <SolutionBladeRight />
                </SolutionTwo>
                <ProductTitle>Resolution Drops</ProductTitle>
                <SolutionThree>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=124&countryCode=US">
                    <img className='productThree' src={Drops} alt="Resolution Drops"></img></a>
                    <SolutionTextOne>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextOne>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=124&countryCode=US">
                    <SolutionButton>Learn More</SolutionButton></a>
                    <SolutionBladeLeft />
                </SolutionThree>
                <ProductTitleTwo id="nrgTitle">NRG</ProductTitleTwo>
                <SolutionFour>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=189&countryCode=US">
                    <img className='productFour' src={NRG} alt="NRG Supplement"></img></a>
                    <SolutionTextTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </SolutionTextTwo>
                    <a href="https://retail.totallifechanges.com/40642483/shopping/itemdetails?itemCode=189&countryCode=US">
                    <SolutionButtonTwo>Learn More</SolutionButtonTwo>
                    </a>
                </SolutionFour>
            </SolutionsContainer>
        </>
    )
}

export default SolutionsSection;