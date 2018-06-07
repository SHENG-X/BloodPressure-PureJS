import glamorous from 'glamorous';
import React from 'react';


// const Container = glamorous.div(props =>({
//       display: 'flex',
//       width: '100vw',
//       height: '100vh',
//       flexDirection: 'column',
//       alignItems:'center',
//       background:'red'
// }));

const Container = glamorous('div', {propsAreCssOverrides: true})({
      display: 'flex',
      width: '100vw',
      height: '100vh',
      flexDirection: 'column',
      alignItems:'center',
      background: '#eee'
})
const ListView = (props)=>{
      return(
            <Container {...props}>
                  {
                        props.children
                  }
            </Container>
      )
}

export default ListView;