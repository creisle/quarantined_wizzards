import './icons.scss';

import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

import { SUIT } from './types';


export function ScoreBoardIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            {...props}
            className='scoreboard-icon'
            style={{
                fill: 'white',
                fontSize: '3rem'
            }}
        >
            <path d="m.75 10.364 11.25 0m0 0 11.042 0m-11.042 0 0-4.5m0 4.5 0 10.227m-5.833-14.932 0-2.659m11.458 2.659 0-2.659m-13.875 18 16.5 0c1.657 0 3-1.343 3-3l0-9.545c0-1.657-1.343-3-3-3l-16.5 0c-1.657 0-3 1.343-3 3l0 9.545c0 1.657 1.343 3 3 3zm14.877-5.319c0 .571-.098.996-.293 1.274-.195.278-.5.417-.915.417-.41 0-.713-.135-.91-.406-.197-.272-.299-.679-.306-1.218l0-.651c0-.564.098-.983.293-1.258.195-.274.501-.411.918-.411.413 0 .717.133 .912.398 .195.264 .295.671 .301 1.223l0 .633zm-.488-.667c0-.413-.058-.714-.174-.902-.116-.19-.3-.285-.551-.285-.25 0-.432.094-.546.282-.114.188-.173.477-.177.867l0 .78c0 .415.06 .722.179 .92.121 .197.304 .295.548 .295.241 0 .419-.093.535-.279.118-.186.179-.48.185-.881l0-.799zm-10.762.667c0 .571-.098.996-.293 1.274-.195.278-.5.417-.915.417-.41 0-.713-.135-.91-.406-.197-.272-.299-.679-.306-1.218l0-.651c0-.564.098-.983.293-1.258.195-.274.501-.411.918-.411.413 0 .717.133 .912.398 .195.264 .295.671 .301 1.223l0 .633zm-.488-.667c0-.413-.058-.714-.174-.902-.116-.19-.3-.285-.551-.285-.25 0-.432.094-.546.282-.114.188-.173.477-.177.867l0 .78c0 .415.06 .722.179 .92.121 .197.304 .295.548 .295.241 0 .419-.093.535-.279.118-.186.179-.48.185-.881l0-.799z" stroke="black" />
        </SvgIcon>
    )
}


interface SuitIconProps extends SvgIconProps {
    variant: SUIT;
}

const suitPaths: Record<string, string> = {
    diamonds: "M12 1.106C9.656 4.954 6.965 8.585 4.012 11.988 6.968 15.39 9.704 19.012 12 22.894 14.296 19.012 17.032 15.39 19.988 11.988 17.035 8.585 14.344 4.954 12 1.106z",
    clubs: "M11.996.574C10.536.574 9.313 1.065 8.316 2.042 7.32 3.02 6.823 4.183 6.823 5.532 6.823 6.633 7.248 7.784 8.102 8.997 7.362 8.381 6.625 8.015 5.223 8.015 2.479 8.015.512 10.267.512 13.081.512 16.064 2.689 18.336 5.594 18.336 8.502 18.336 10.684 16.352 11.757 13.939 11.707 15.906 11.408 17.464 10.857 18.608 10.307 19.753 9.463 20.7 8.325 21.454 7.557 21.962 6.176 22.407 4.183 22.791L4.035 23.426 11.996 23.426 19.965 23.426 19.817 22.791C17.824 22.407 16.443 21.962 15.675 21.454 14.537 20.7 13.693 19.753 13.143 18.608 12.592 17.464 12.293 15.906 12.243 13.939 13.316 16.352 15.498 18.336 18.406 18.336 21.311 18.336 23.488 16.064 23.488 13.081 23.488 10.267 21.521 8.015 18.777 8.015 17.375 8.015 16.638 8.381 15.898 8.997 16.752 7.784 17.177 6.633 17.177 5.532 17.177 4.183 16.68 3.02 15.684 2.042 14.687 1.065 13.456.574 11.996.574z",
    spades: "M12 .482C11.687 1.78 11.206 2.946 10.557 3.968 9.908 4.99 8.752 6.251 7.086 7.76 5.421 9.269 4.365 10.425 3.92 11.231 3.475 12.036 3.255 12.854 3.255 13.683 3.255 14.838 3.64 15.799 4.409 16.569 5.179 17.338 6.117 17.723 7.223 17.723 9.203 17.723 10.734 16.277 11.743 14.701 11.667 16.425 11.383 17.804 10.886 18.837 10.351 19.949 9.532 20.87 8.425 21.603 7.68 22.096 6.337 22.529 4.401 22.901L4.257 23.518 11.992 23.518 19.735 23.518 19.591 22.901C17.655 22.529 16.312 22.096 15.567 21.603 14.46 20.87 13.641 19.949 13.106 18.837 12.61 17.806 12.326 16.429 12.248 14.709 13.258 16.283 14.8 17.723 16.777 17.723 17.883 17.723 18.821 17.338 19.591 16.569 20.36 15.799 20.745 14.838 20.745 13.683 20.745 12.854 20.525 12.036 20.08 11.231 19.635 10.425 18.579 9.269 16.914 7.76 15.248 6.251 14.092 4.99 13.443 3.968 12.794 2.946 12.313 1.78 12 .482Z",
    hearts: "M12.035 22.843C11.677 21.484 11.168 20.208 10.505 19.016 9.843 17.823 8.561 15.971 6.661 13.46 5.267 11.617 4.408 10.448 4.086 9.952 3.556 9.146 3.173 8.406 2.937 7.732 2.701 7.058 2.583 6.375 2.583 5.684 2.583 4.406 3.009 3.334 3.861 2.47 4.714 1.606 5.768 1.174 7.023 1.174 8.291 1.174 9.391 1.624 10.324 2.522 11.027 3.19 11.597 4.187 12.035 5.511 12.415 4.21 12.95 3.219 13.642 2.539 14.598 1.618 15.704 1.157 16.959 1.157 18.203 1.157 19.257 1.586 20.121 2.444 20.985 3.303 21.417 4.325 21.417 5.511 21.417 6.548 21.164 7.628 20.657 8.751 20.15 9.875 19.171 11.346 17.72 13.166 15.83 15.551 14.454 17.509 13.59 19.041 12.91 20.251 12.392 21.518 12.035 22.843L12.035 22.843z",
};

export function SuitIcon(props: SuitIconProps) {
    const { variant } = props;

    if ([ SUIT.JESTER,  SUIT.WIZARD].includes(variant)) {
        return (
            <span 
                className={`suit-icon suit-icon--${variant}`}
            >
                {variant.charAt(0)}
            </span>
        )
    }

    return (
        <SvgIcon
            {...props}
            className={`suit-icon suit-icon--${variant}`}
        >
            <path d={suitPaths[variant as string]} />
        </SvgIcon>
    )
}

interface TrophyIconProps extends SvgIconProps {
    variant?: 'gold' | 'silver' | 'bronze';
}

export function TrophyIcon(props: TrophyIconProps) {
    const { variant = 'gold' } = props;
    return (
        <SvgIcon {...props} className={`trophy-icon trophy-icon--${variant}`}>
            <path d='m6.911 11.823q-1.007-2.204-1.007-5.049L2.42 6.775 2.42 8.081Q2.42 9.142 3.706 10.285 4.992 11.428 6.911 11.823zm14.669-3.742 0-1.306-3.484 0q0 2.844-1.007 5.049 1.919-.395 3.205-1.538 1.286-1.143 1.286-2.204zm1.742-1.742L23.322 8.081q0 .966-.565 1.946-.565.98-1.524 1.769-.959.789-2.354 1.327Q17.484 13.66 15.946 13.728 15.375 14.463 14.654 15.021 14.136 15.484 13.939 16.008 13.742 16.531 13.742 17.225q0 .735.415 1.238.415 .503 1.327.503 1.021 0 1.817.619Q18.096 20.206 18.096 21.145l0 .871q0 .191-.122.313-.122.122-.313.122L6.339 22.451q-.191 0-.313-.122-.122-.122-.122-.313l0-.871Q5.904 20.206 6.7 19.586 7.496 18.967 8.516 18.967q.912 0 1.327-.503.415-.503.415-1.238 0-.694-.197-1.218Q9.864 15.484 9.346 15.021 8.625 14.463 8.054 13.728 6.516 13.66 5.121 13.123 3.726 12.585 2.767 11.796 1.808 11.007 1.243 10.027.678 9.047.678 8.081l0-1.742q0-.544.381-.925.381-.381.925-.381l3.919 0 0-1.306q0-.898.64-1.538.64-.64 1.538-.64l7.838 0q.898 0 1.538.64 .64.64 .64 1.538l0 1.306 3.919 0q.544 0 .925.381 .381.381 .381.925z'/>
        </SvgIcon>
    )
}