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
                    I love this tea! I drink it towards the end of my day to wind down. It comes in a lot of flavors but raspberry is my personal favorite. Not only does it help with fiber but it's a complex detox for your system. Cleansing your body from toxins, this is the way to supercharge your lifestyle. 
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
                    Who doesn't love coffee in the morning? I switch it up and drink this because of the added benefits. It helps my metabolism and keeps my appetite in until lunchtime. I have a sweet tooth so I add a bit of splenda to mine but the flavor on its own is so good! A rich, dark, Arabica coffee.
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
                    I am a big proponent of drinking water throughout the day. Coupled with a few drops of this, staying on track with my weight loss is easy. One of the biggest benefits is how it helps support your nervous system while also helping to suppress those cravings throughout the day.
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
                    We all live life dialed to ten sometimes. This is where taking NRG comes into play. It helps by giving me a crash free energy stream so I can focus on what I need to and not worry about being drowsy. Helps support my immune system and gives me clean energy, can't beat that!
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