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
const Info = glamorous('div', {propsAreCssOverrides:true})({
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
      textAlign:'center'

});
const InnerContainer = glamorous.div({
      width: '100%',
      height: '100%',
      display: 'grid',
      grid: '10% 10% / 33% 33% 33%',
});
const getColor = (props)=>{
      var color;
      if (props['systolic'] <= 90 && props['diastolic'] <= 60) {
            console.log('low');
            color = '#93deff';
      }
      else if (props['systolic'] < 120 && props['diastolic'] < 80) {
            //normal
            console.log('normall');
            color = '#8BC34A';

      }
      else if (props['systolic'] >= 120 && props['systolic'] <= 129 && props['diastolic'] <= 80) {
            //elavated
            console.log('elavated');
            color = '#FFC107';

      }
      else if (props['systolic'] >= 130 && props['systolic'] <= 139 && props['diastolic'] > 80 && props['diastolic'] <= 89) {
            //stage one high
            console.log('stage 1 high');
            color = '#FFCDD2';

      }
      else if (props['systolic'] >= 140 && props['diastolic'] >= 90) {
            //stage two high
            console.log('stage 2 high');
            color = '#ff6d00';

      }
      else{
            color = 'black';
      }
      return color;
}
const InfoCard = (props)=>{
     const date =new Date(props.ID);
     let colorSchema = getColor(props);
     return(
           <Container id={props.id} onClick={(e) => props.click(e)}>
                 <FlexBox id={props.id}><Info id={props.id} backgroundColor={colorSchema}/></FlexBox>
                 <FlexBox id={props.id} style={{fontSize:'1.5em'}}>{date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()}</FlexBox>
                 <FlexBox id={props.id}>
                        <div style={{width:'80%'}} id={props.id}>
                              <InnerContainer id={props.id} >
                                    <FlexBox id={props.id}>{props.systolic}</FlexBox>
                                    <FlexBox id={props.id}>{props.diastolic}</FlexBox>
                                    <FlexBox id={props.id}>{props.pulse}</FlexBox>
                                    <FlexBox id={props.id} >SYS</FlexBox>
                                    <FlexBox id={props.id}>DIA</FlexBox>
                                    <FlexBox id={props.id}>BPS</FlexBox>
                        </InnerContainer>
                        </div>
                 </FlexBox>
           </Container>
     );
}
export default InfoCard;