import { setDocumentCustomStyles, } from '@bbva-web-components/bbva-core-lit-helpers';
import { generateFlatGridZones, grid } from '@bbva-web-components/bbva-foundations-styles';
import { css, } from 'lit-element';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-foundations-grid-default-layout/bbva-foundations-grid-default-layout.js';
import '@bbva-web-components/bbva-progress-content/bbva-progress-content.js';

setDocumentCustomStyles(generateFlatGridZones(grid));

setDocumentCustomStyles(css`
  body {
    margin: 0;
    background: #DFF9F9;
`);
