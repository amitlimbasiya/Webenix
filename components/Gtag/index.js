import React from 'react';
import * as s from "../../styles/components/SectionIntro/SectionIntro.style"; 
import parse from 'html-react-parser';

const Gtag = (props) => {
  return (
    
    <s.GtagWrapper>
        {parse(props.GtagContent)}
    </s.GtagWrapper>

    

  );
};

export default Gtag;