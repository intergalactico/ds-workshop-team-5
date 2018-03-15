import React from 'react'
import { array } from 'prop-types';

import * as s from './styles.js'

const FooterCol = props => {
	const {content, length} = props;
	return (
		<s.FooterCol length={length} >
			{content}
		</s.FooterCol>
	)
}

const Footer = (props) => {
	const {cols} = props;
  return (
    <s.Footer>
    	{
    		cols.map((col, index) => 
    				<FooterCol key={index} content={col} length={cols.length} ></FooterCol>
    			)
    	}
    </s.Footer>
  )
}

Footer.propTypes = {
  cols: array
};


export default Footer
