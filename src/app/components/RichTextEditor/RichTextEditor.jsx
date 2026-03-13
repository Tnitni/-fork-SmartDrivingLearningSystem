// src/app/components/RichTextEditor/RichTextEditor.jsx
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { AutoLinkNode, LinkNode } from '@lexical/link';

import ToolbarPlugin from './plugins/ToolbarPlugin';
import './RichTextEditor.css';

const theme = {
    root: 'rte-root',
    paragraph: 'rte-paragraph',
    heading: {
        h1: 'rte-h1',
        h2: 'rte-h2',
        h3: 'rte-h3',
    },
    quote: 'rte-quote',
    list: {
        ul: 'rte-ul',
        ol: 'rte-ol',
        listitem: 'rte-listitem',
    },
    text: {
        bold: 'rte-bold',
        italic: 'rte-italic',
        underline: 'rte-underline',
        strikethrough: 'rte-strikethrough',
    },
    link: 'rte-link',
};

function onError(error) {
    console.error('[RichTextEditor]', error);
}

/**
 * Props:
 *  - onChange(editorState, editor) : lắng nghe thay đổi
 *  - initialConfig : override LexicalComposer config (tuỳ chọn)
 *  - placeholder : text placeholder (default: "Nhập nội dung...")
 *  - readOnly : boolean
 *  - autoFocus : boolean
 */
export default function RichTextEditor({
    onChange,
    placeholder = 'Nhập nội dung...',
    readOnly = false,
    autoFocus = false,
    initialConfig = {},
}) {
    const config = {
        namespace: 'RichTextEditor',
        theme,
        onError,
        editable: !readOnly,
        nodes: [
            HeadingNode,
            QuoteNode,
            ListNode,
            ListItemNode,
            LinkNode,
            AutoLinkNode,
        ],
        ...initialConfig,
    };

    return (
        <LexicalComposer initialConfig={config}>
            <div className='rte-wrapper'>
                {!readOnly && <ToolbarPlugin />}
                <div className='rte-editor-area'>
                    <RichTextPlugin
                        contentEditable={<ContentEditable className='rte-content-editable' />}
                        placeholder={<div className='rte-placeholder'>{placeholder}</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    {autoFocus && <AutoFocusPlugin />}
                    {onChange && (
                        <OnChangePlugin
                            onChange={(editorState, editor) => onChange(editorState, editor)}
                        />
                    )}
                </div>
            </div>
        </LexicalComposer>
    );
}