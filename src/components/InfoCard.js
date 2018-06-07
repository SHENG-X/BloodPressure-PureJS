import glamorous from 'glamorous';
import React from 'react';

const Container = glamorous.div({
      width: '95vw',
      display:'grid',
      grid:'50px / 50px 4fr 6fr',
      boxShadow: '0 0 2px 2px black',
      background:'white',
      margin:'5px',
      ':hover':{
            transform: 'scale(1.02)'
      }
});
const Info = glamorous('div',{propsAreCssOverrides:true})({
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'black',
})
const FlexBox = glamorous.div({
      width:'100%',
      height:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

});
const InnerContainer = glamorous.div({
      width: '100%',
      height: '100%',
      display: 'grid',
      grid: '10% 10% / 33% 33% 33%',
});
const InfoCard = (props)=>{
     return(
           <Container>
                 <FlexBox><Info  {...props}/></FlexBox>
                 <FlexBox>2018/09/12</FlexBox>
                 <FlexBox>
                        <div style={{width:'80%'}}>
                              <InnerContainer>
                                    <FlexBox>88</FlexBox>
                                    <FlexBox>128</FlexBox>
                                    <FlexBox>89</FlexBox>
                                    <FlexBox>SYS</FlexBox>
                                    <FlexBox>DIA</FlexBox>
                                    <FlexBox>PUL</FlexBox>
                        </InnerContainer>
                        </div>
                 </FlexBox>
           </Container>
     );
}
export default InfoCard;