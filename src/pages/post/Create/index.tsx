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
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'textcolor colorpicker',
            'directionality emoticons',
            'paste code table image media', // image와 media 플러그인 추가
            'code', // 코드 뷰어
            'table', // 테이블 기능
            'charmap', // 문자 모음
            'fullscreen', // 전체 화면 모드
          ],
          toolbar:
            'undo redo | styleselect | bold italic underline | forecolor backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | link image media | \
          insertdatetime preview emoticons | removeformat | help | code | \
          table charmap fullscreen',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          external_plugins: {
            advlist:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/advlist/plugin.min.js',
            autolink:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/autolink/plugin.min.js',
            lists:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/lists/plugin.min.js',
            link: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/link/plugin.min.js',
            image:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/image/plugin.min.js',
            charmap:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/charmap/plugin.min.js',
            print:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/print/plugin.min.js',
            preview:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/preview/plugin.min.js',
            anchor:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/anchor/plugin.min.js',
            searchreplace:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/searchreplace/plugin.min.js',
            visualblocks:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/visualblocks/plugin.min.js',
            code: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/code/plugin.min.js',
            fullscreen:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/fullscreen/plugin.min.js',
            insertdatetime:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/insertdatetime/plugin.min.js',
            media:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/media/plugin.min.js',
            table:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/table/plugin.min.js',
            paste:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/paste/plugin.min.js',
            help: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/help/plugin.min.js',
            wordcount:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/wordcount/plugin.min.js',
            textcolor:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/textcolor/plugin.min.js',
            colorpicker:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/colorpicker/plugin.min.js',
            directionality:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/directionality/plugin.min.js',
            emoticons:
              'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.0.0/plugins/emoticons/plugin.min.js',
          },
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
