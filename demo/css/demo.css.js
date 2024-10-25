import { setDocumentCustomStyles, } from '@bbva-web-components/bbva-core-lit-helpers';
import { generateFlatGridZones, grid } from '@bbva-web-components/bbva-foundations-styles';
import { css, } from 'lit-element';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-foundations-grid-default-layout/bbva-foundations-grid-default-layout.js';
import '@bbva-web-components/bbva-form-text/bbva-form-text.js';
import '@bbva-experience-components/bbva-type-text/bbva-type-text.js';

setDocumentCustomStyles(generateFlatGridZones(grid));

setDocumentCustomStyles(css`
  body {
    margin: 0;
  }
`);