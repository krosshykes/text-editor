// KaTeX dependency
import katex from "katex";
window.katex = katex;
import "katex/dist/katex.css";

// Quill dependency
import ReactQuill, { Quill } from "react-quill";
import "../../node_modules/katex/dist/katex.css"

import "../../node_modules/quill/dist/quill.snow.css";

// MathQuill dependency
import "../../node_modules/jquery/dist/jquery";
import "../../node_modules/@edtr-io/mathquill/build/mathquill";
import "../../node_modules/@edtr-io/mathquill/build/mathquill.css";

// mathquill4quill include
import mathquill4quill from "mathquill4quill";
import "../../node_modules/mathquill4quill/mathquill4quill.css"

// demo page
import React from "react";

const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike', "formula"],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    ['clean']
];

export default class Editor extends React.Component {
    reactQuill = React.createRef();

    componentDidMount() {
        const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex });
        enableMathQuillFormulaAuthoring(
            this.reactQuill.current.editor,
            this.props.options
        );
    }

    render() {
        return (
            <ReactQuill
                ref={this.reactQuill}
                id="editor"
                modules={{
                    formula: true,
                    toolbar: toolbarOptions,
                }}
                placeholder="Type text here, or click on the formula button to enter math."
                theme="snow"
            />
        );
    }
}