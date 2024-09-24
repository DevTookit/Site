import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const BlogEditor: React.FC = () => {
  const editorRef = useRef<any>(null);

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log('Content:', content);
      // 여기에 저장 로직 추가 (API 전송 등)
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-lg border bg-white p-4">
      <Editor
        apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="Start writing your blog..."
        init={{
          branding: false,
          height: 600,
          menubar: true, // 메뉴바 활성화
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'textcolor colorpicker',
            'directionality emoticons',
            'paste code table image',
          ],
          toolbar:
            'undo redo | styleselect | bold italic underline | forecolor backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | link image | \
            insertdatetime preview media | emoticons | \
            removeformat | help | code',
          style_formats: [
            { title: 'Bold text', inline: 'b' },
            { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } },
            {
              title: 'Blue text',
              inline: 'span',
              styles: { color: '#0000ff' },
            },
            { title: 'Header 1', block: 'h1' },
            { title: 'Header 2', block: 'h2' },
            { title: 'Header 3', block: 'h3' },
          ],
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default BlogEditor;
