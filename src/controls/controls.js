export const useDeviceType = () => {
	const deviceType = wp.data.select( 'core/editor' ).getDeviceType();
	return deviceType || 'Desktop';
};

export const cssString = ( css ) => {
	let result = '';
	for ( const selector in css ) {
		let cssProps = '';
		for ( const property in css[ selector ] ) {
			if (
				css[ selector ][ property ] &&
				css[ selector ][ property ].length > 0
			) {
				cssProps += property + ':' + css[ selector ][ property ] + ';';
			}
		}
		result += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
	}
	return result;
};

// Remove empty css.
export const cssDataCheck = ( value, unit = '' ) => {
	let data = '';
	if ( 'object' === typeof value ) {
		for ( let single in value ) {
			if ( value[ single ].length > 0 ) {
				data += ` ${ value[ single ] }${ unit }`;
			}
		}
	} else {
		if ( value && value.toString().length > 0 ) {
			data = `${ value }${ unit }`;
		}
	}
	return data;
};

// Check unit single or object.
export const unit = ( attributes, deviceType ) => {
	if ( 'object' !== typeof attributes.unit ) {
		return attributes.unit;
	}
	return attributes.unit[ deviceType ];
};
