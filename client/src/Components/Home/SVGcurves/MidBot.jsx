import './MidBot.css';
import styled from 'styled-components';

const MidBot = (props) => {
    
    
    return (
        <MidBotStyle className='MidBot'>
        {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{zIndex:"1"}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg> */}
        {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg> */}
<svg viewBox="0 0 500 150" preserveAspectRatio="none">
<defs>
    <linearGradient id="grad1" x1="95%" y1="0%" x2="10%" y2="0%">
     
      <stop offset="0%" style={{stopColor: '#BF953F',stopOpacity: 1}} />
      <stop offset="25%" style={{stopColor: '#FCF6BA', stopOpacity:1}} />
      <stop offset="50%" style={{stopColor: '#B38728 ', stopOpacity:1}} />
      <stop offset="75%" style={{stopColor: '#FBF5B7', stopOpacity:1}} />
      <stop offset="100%" style={{stopColor: '#AA771C', stopOpacity:1}} />
    </linearGradient>
  </defs>
    <path d="M175.73,25.16 C346.73,97.20 343.90,-26.15 517.72,32.06 L501.35,-2.46 L175.73,-2.46 Z" style={{fill:'url(#grad1)'}}></path></svg>
        </MidBotStyle>
    )

}   
export default MidBot;

const MidBotStyle = styled.div`
   
   
 

   `
