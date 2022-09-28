import React from 'react';
import * as s from "../../styles/components/SectionIntro/SectionIntro.style"; 
import parse from 'html-react-parser';

const Schema = (props) => {
  return (
    
    <s.SchemaWrapper>
        {parse(props.SchemaContent)}
    </s.SchemaWrapper>

    

  );
};

export default Schema;