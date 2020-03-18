CKEditor 5 Footnote plugin
========================================

This package implements footnote feature for CKEditor 5.

## Documentation

#### Installation

Install the ckeditor5-footnote package:

`npm install --save ckeditor5-footnote`

Then add the `Footnote` plugin to the plugin list:

```javascript
import FootNote from 'ckeditor5-footnote/footnote';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ FootNote, ... ],
        toolbar: [ 'footnote', ... ],
    } )
    .then( ... )
    .catch( ... );

```