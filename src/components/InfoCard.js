import glamorous from 'glamorous';
import React from 'react';

const Container = glamorous.div({
      width: '95vw',
      display:'grid',
      grid:'60px / 60px 4fr 6fr',
      boxShadow: '0 0 2px 2px #eee',
      borderRadius:'5px',
      background: 'white',
      margin:'3px',
      ':active':{
            transform: 'scale(1.02)'
      }
});
const Info = glamorous('div',{propsAreCssOverrides:true})({
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      backgroundColor: 'black',
})
const FlexBox = glamorous.div({
      width:'100%',
      height:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center'

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
                 <FlexBox style={{fontSize:'1.5em'}}>{props.ID}</FlexBox>
                 <FlexBox>
                        <div style={{width:'80%'}}>
                              <InnerContainer>
                                    <FlexBox>{props.systolic}</FlexBox>
                                    <FlexBox>{props.diastolic}</FlexBox>
                                    <FlexBox>{props.pulse}</FlexBox>
                                    <FlexBox >SYS</FlexBox>
                                    <FlexBox>DIA</FlexBox>
                                    <FlexBox>BPS</FlexBox>
                        </InnerContainer>
                        </div>
                 </FlexBox>
           </Container>
     );
}
export default InfoCard;