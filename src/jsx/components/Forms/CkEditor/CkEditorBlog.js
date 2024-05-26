import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditorBlog = ({ onContentChange }) => {
    // Configuration for the CKEditor toolbar
    const editorConfiguration = {
        toolbar: [
            'bold',             // Bold option
            'italic',           // Italic option
            'link',             // Link option
            '|',                // Separator
            'undo',             // Undo option
            'redo',             // Redo option
            // '|',                // Separator
            // 'numberedList',     // Numbered List option
            // 'bulletedList'      // Bulleted List option
            // Add more options as needed
        ],
        enterMode: 'br',         // Pressing Enter creates a <br> element
        shiftEnterMode: 'br'     // Pressing Shift+Enter also creates a <br> element
    };

    return (
        <>
            <CKEditor
                editor={ ClassicEditor }
                config={ editorConfiguration } // Pass toolbar configuration
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={(event, editor) => {
                    const content = editor.getData();
                    onContentChange(content); // Pass content to parent component
                }}
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            /> 
        </>
    );
};

export default CkEditorBlog;
