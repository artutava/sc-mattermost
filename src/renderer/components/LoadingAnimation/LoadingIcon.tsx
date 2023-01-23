// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

/**
 * A function component for inlining SVG code for animation logo loader
 */
function LoadingAnimation() {
    return (
        <svg
            width='104'
            height='104'
            viewBox='0 0 104 104'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    id='LoadingAnimation__spinner-gradient'
                    x1='0%'
                    y1='72px'
                    x2='0%'
                    y2='32px'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        offset='0'
                        className='LoadingAnimation__spinner-gradient-color'
                        stopOpacity='1'
                    />
                    <stop
                        offset='1'
                        className='LoadingAnimation__spinner-gradient-color'
                        stopOpacity='0'
                    />
                </linearGradient>
                <mask id='LoadingAnimation__base-wipe-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='104'
                        height='104'
                        fill='white'
                    />
                    <g className='LoadingAnimation__compass-base-mask-container'>
                        <circle
                            className='LoadingAnimation__compass-base-mask'
                            r='27'
                            cx='52'
                            cy='52'
                            fill='white'
                            stroke='black'
                            strokeWidth='54'
                        />
                    </g>
                </mask>
                <mask id='LoadingAnimation__base-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='104'
                        height='104'
                        fill='white'
                    />
                    <circle
                        r='37'
                        cx='54'
                        cy='46'
                        fill='black'
                    />
                    <g className='LoadingAnimation__compass-needle-behind-mask'>
                        <g transform='translate(54,46)'>
                            <g transform='translate(-29, -61.3)'>
                                <path
                                    d='M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z'
                                    fill='black'
                                />
                            </g>
                        </g>
                    </g>
                    <g className='LoadingAnimation__compass-needle-front-mask'>
                        <g transform='translate(54,46)'>
                            <g transform='translate(-29,-61.3)'>
                                <path
                                    d='M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z'
                                    fill='black'
                                />
                            </g>
                        </g>
                    </g>
                </mask>
                <mask id='LoadingAnimation__spinner-left-half-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='52'
                        height='104'
                        fill='white'
                    />
                    <circle
                        className='LoadingAnimation__spinner-mask'
                        r='20'
                        cx='52'
                        cy='52'
                        fill='black'
                    />
                </mask>
                <mask id='LoadingAnimation__spinner-right-half-mask'>
                    <rect
                        x='52'
                        y='0'
                        width='52'
                        height='104'
                        fill='white'
                    />
                    <circle
                        className='LoadingAnimation__spinner-mask'
                        r='20'
                        cx='52'
                        cy='52'
                        fill='black'
                    />
                </mask>
            </defs>
            <g
                className='LoadingAnimation__spinner-container'
            >
                <g className='LoadingAnimation__spinner'>
                    <circle
                        r='25'
                        cx='52'
                        cy='52'
                        fill='currentColor'
                        mask='url(#LoadingAnimation__spinner-left-half-mask)'
                    />
                    <circle
                        r='25'
                        cx='52'
                        cy='52'
                        fill='url(#LoadingAnimation__spinner-gradient)'
                        mask='url(#LoadingAnimation__spinner-right-half-mask)'
                    />
                </g>
            </g>
            <g className='LoadingAnimation__compass'>
                <g
                    className='LoadingAnimation__compass-base-container'
                    mask='url(#LoadingAnimation__base-wipe-mask)'
                >
                    
                </g>
                <g className='LoadingAnimation__compass-needle-container'>
                    <g className='LoadingAnimation__compass-needle'>
                        <g transform='translate(0,0)'>
                            <g transform='translate(-0,-0)'>
                            <polygon fill='currentColor' points="61.7,48.7 59.6,48.7 59.6,53.6 61.7,54.2 	"/>
	<polygon fill='currentColor' points="56.2,52.7 58.2,53.2 58.2,48.6 56.2,48.5 	"/>
	<polygon fill='currentColor' points="72.8,49.2 70.6,49.1 70.6,56.7 73.1,57.4 	"/>
	<path fill='currentColor' d="M31.7,48.2c0.2,0.5-6.2,4-8.9,10.3c0,0,9.3-2.3,13.8-2c0.8,1.9,1.8,3.7,3.2,5.3c0.6,0.7,1.4,1.4,2,2.1
		c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.2,0.3,0.5,0.5,0.7c0.2,0.3,0.3,0.5,0.5,0.8c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.1,0.1,0.2,0.1,0.2c0,0,0.1,0.2,0.1,0.2c1.3,3.2,1.2,7.4-1.6,9.9c-0.7,0.6-1.5,1-2.3,1.5c-1,0.6-2.1,1.2-3.1,1.8
		c-0.3,0.2-0.6,0.4-0.9,0.6c-0.4,0.2-0.5,0.6-0.5,1c0,1.1,0,2.2,0,3.4c0,0.1,0,0.2,0,0.3c-0.9,0.4-1.7,0.8-2.6,1.2
		c-0.3,0.1-0.4,0.5-0.4,0.7c0,0.8,0,1.6,0,2.4c0,0.4,0.3,0.7,0.6,0.8c2.3,0.7,4.5,1.4,6.8,2.2c3.6,1.2,7.2,2.3,10.8,3.5
		c0.8,0.3,1.6,0.6,2.5,0.8c0.3,0.1,0.5,0,0.8-0.1c0.4-0.1,0.8-0.3,1.2-0.4c3.4-1.1,6.8-2.2,10.2-3.3c2.7-0.9,5.4-1.7,8-2.6
		c0,0,0.1,0,0.1,0c0.4-0.1,0.6-0.4,0.6-0.8c0-0.8,0-1.6,0-2.4c0-0.3-0.2-0.6-0.4-0.8c-0.7-0.3-1.3-0.6-2-1c-0.2-0.1-0.4-0.2-0.6-0.3
		c0-1.3,0-2.5,0-3.8c0-0.3-0.2-0.6-0.4-0.8c-1-0.5-1.9-1-2.9-1.6c-0.8-0.5-1.6-1-2.4-1.5C64.2,77,63.7,76.7,63,76
		c0,0-0.1-0.1-0.1-0.2c0.2,0.2,0,0,0-0.1c-0.1-0.1-0.2-0.3-0.2-0.5c0,0-0.1-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3
		c0-0.1-0.1-0.2-0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c-0.1-1.5,0.5-3,1.4-4.3c0.1-0.1,0.2-0.3,0.2-0.3
		s2.2,0.5,3.4,0.8c0.6,0.1,1.2,0.3,1.8,0.4c0.5,0.1,0.9-0.2,1.1-0.6c0.9-2.4,1.5-5,1.9-7.6c1.6,0.4,2.7,0.7,2.7,0.7l1.4,0.3l0.4-1.4
		c0.9-3,1.1-6.6,0.5-10.6c-0.4-2.9-1.1-5-1.1-5.1l-0.1-0.4l-0.3-0.3c-0.4-0.3-1-0.6-3-0.8c-0.1,0-0.3,0-0.4-0.1
		c-0.6-1.8-1.4-3.6-2.6-5.1c-0.9-1.3-2-2.4-3.3-3.3L79.8,5.7c0,0-14.4,5.4-22.5,12.5c0,0-0.6-0.6-1.5-1.7l0,0c0,0-1.9,3.7-2.5,5.7
		c0,0,2.9-0.7,3.8-0.5c0,0-2.3,2.5-2.9,10.3c-0.2,0-0.4,0-0.7,0c-1.2,0.1-2.4,0.3-3.6,0.6c0.4-2.6,1.1-5.9,1.7-6.8l-2.9,0.4
		c0,0-0.5-5.5,4.3-13.3c-1.5-2-2.8-4.2-2.9-6c0,0-5,16.3-5.7,19c0,0-6.8-3.3-9.5-10.7c0,0-5,15.1-0.3,20.7c0,0-11.7,2.1-15.7,1.5
		C18.8,37.6,31.5,47.7,31.7,48.2z M71.9,87.7c0,0.4,0,0.8,0,1.2c-2,0.7-4.1,1.3-6.1,2c-3.6,1.2-7.1,2.3-10.7,3.4
		c-0.7,0.2-1.5,0.5-2.2,0.7c-2.2-0.7-4.4-1.4-6.5-2.1c-3.6-1.2-7.2-2.3-10.8-3.5c-0.6-0.2-1.2-0.4-1.8-0.6c0-0.4,0-0.8,0-1.2
		c0.7-0.3,1.5-0.7,2.2-1c1.8,0.6,3.7,1.2,5.5,1.7c3.1,1,6.1,1.9,9.2,2.9c0.7,0.2,1.4,0.5,2.1,0.7c0.5,0.1,1.2-0.2,1.7-0.4
		c2.9-0.9,5.8-1.9,8.7-2.8c2.2-0.7,4.5-1.4,6.7-2.2C70.5,87,71.2,87.4,71.9,87.7z M74.5,46.8c0,0,2.6,8,0.6,14.8
		c0,0-21.6-5.2-25.3-7.8c0,0-2.5-1.7-1.7-4.9c0.4-1.6,2.2-2.9,4.6-3.4c0.7-0.2,2.1-0.2,3.8-0.2C62.9,45.3,73.7,46.2,74.5,46.8z
		 M37.6,45.3c0.1-0.2,0.1-0.4,0.2-0.7c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0.1-0.1,0.1-0.3,0.2-0.4c0.2-0.5,0.5-1,0.8-1.4
		c0.7-1,1.3-1.9,2.3-2.8c1-1,2-1.9,3.1-2.6c2.5-1.7,5.1-2.8,8.1-3.3c3.1-0.5,6.5,0.1,9.4,1.5c3.4,1.6,6.2,4.2,7.9,7.6
		c0.2,0.3,0.3,0.6,0.4,1c-4.4-0.5-8.8-0.7-13.1-0.8c-2,0-4.1,0-6,0.7c-1.8,0.6-3.5,1.7-4.3,3.5c-0.9,1.9-0.7,4.2,0.4,6
		c0.7,1.2,1.8,2,3,2.6c2.9,1.4,6.1,2.3,9.2,3.2c3.6,1,7.2,2,10.8,2.9c0.1,0,0.3,0.1,0.4,0.1c-0.3,2.2-0.8,4.4-1.5,6.5
		c-1.3-0.3-2.7-0.6-4-0.9c-2.5-0.6-5.1-1.1-7.6-1.7c-0.6-0.1-4.7-1.2-4.7-1.2l9.3,4.8c-0.7,1.3-1.2,2.8-1.1,4.3
		c0.1,1.1,0.4,2.3,1.2,3.1c1.3,1.3,2.9,2.2,4.5,3.2c0.8,0.5,1.7,1,2.5,1.4c0,1.1,0,2.2,0,3.2c-0.8,0.2-1.6,0.5-2.3,0.8
		c-3.7,1.2-7.3,2.3-11,3.5c-0.9,0.3-1.8,0.6-2.6,0.9c-1.8-0.6-3.7-1.2-5.5-1.8c-3.1-1-6.1-1.9-9.2-2.9c-0.5-0.2-1-0.3-1.5-0.5
		c0-1.1,0-2.2,0-3.3c1.4-0.8,2.7-1.6,4.1-2.4c0.8-0.5,1.6-0.9,2.3-1.5c1.4-1.2,2.3-2.9,2.7-4.7c0.7-3.1,0-6.3-1.7-9
		c-0.4-0.7-0.9-1.4-1.4-2c-0.2-0.3-0.5-0.5-0.8-0.8c-0.6-0.6-1.1-1.2-1.6-1.8c-2.1-2.8-3.2-6.1-3.3-9.6C37,48.5,37.1,46.8,37.6,45.3
		z"/>
	<polygon fill='currentColor' points="69.1,49.1 66.7,49 66.7,55.6 69.1,56.3 	"/>
	<polygon fill='currentColor' points="65.3,48.9 63.1,48.8 63.1,54.6 65.3,55.2 	"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default LoadingAnimation;
