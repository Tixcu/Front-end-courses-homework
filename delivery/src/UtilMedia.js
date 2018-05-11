import React from 'react';
import styled, {injectGlobal, css} from 'styled-components';

export const sizes = {
	desktop: 1200,
	laptop: 992,
	tablet: 768,
	phone: 376
}

export const minWidth = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    	@media (min-width: ${sizes[label] / 16}em) {
    		${css(...args)}
    	}
	`
	return acc;

}, {})

export const maxWidth = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    	@media (max-width: ${sizes[label] / 16}em) {
    		${css(...args)}
    	}
	`
	return acc;

}, {})