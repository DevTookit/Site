import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const BlogEditor: React.FC = () => {
  const editorRef = useRef<any>(null);

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log('Content:', content);
      // 저장 로직 (API 전송 등)
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
            'advlist autolink lists link image charmap anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste wordcount',
            'textcolor colorpicker directionality emoticons autosave',
            'pagebreak template codesample toc quickbars',
            'powerpaste advtable importcss visualchars nonbreaking hr preview print',
          ],
          toolbar:
            'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | \
            alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | forecolor backcolor removeformat | \
            link image media | charmap emoticons | fullscreen save print preview | insertfile codesample anchor | \
            visualblocks code | pagebreak toc',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          external_plugins: {
            advlist: '/assets/js/tinymce/plugins/advlist/plugin.min.js',
            autolink: '/assets/js/tinymce/plugins/autolink/plugin.min.js',
            lists: '/assets/js/tinymce/plugins/lists/plugin.min.js',
            link: '/assets/js/tinymce/plugins/link/plugin.min.js',
            image: '/assets/js/tinymce/plugins/image/plugin.min.js',
            charmap: '/assets/js/tinymce/plugins/charmap/plugin.min.js',
            searchreplace:
              '/assets/js/tinymce/plugins/searchreplace/plugin.min.js',
            visualblocks:
              '/assets/js/tinymce/plugins/visualblocks/plugin.min.js',
            code: '/assets/js/tinymce/plugins/code/plugin.min.js',
            insertdatetime:
              '/assets/js/tinymce/plugins/insertdatetime/plugin.min.js',
            media: '/assets/js/tinymce/plugins/media/plugin.min.js',
            wordcount: '/assets/js/tinymce/plugins/wordcount/plugin.min.js',
            pagebreak: '/assets/js/tinymce/plugins/pagebreak/plugin.min.js',
            table: '/assets/js/tinymce/plugins/table/plugin.min.js',
            emoticons: '/assets/js/tinymce/plugins/emoticons/plugin.min.js',
            codesample: '/assets/js/tinymce/plugins/codesample/plugin.min.js',
            nonbreaking: '/assets/js/tinymce/plugins/nonbreaking/plugin.min.js',
            visualchars: '/assets/js/tinymce/plugins/visualchars/plugin.min.js',
            preview: '/assets/js/tinymce/plugins/preview/plugin.min.js',
            quickbars: '/assets/js/tinymce/plugins/quickbars/plugin.min.js',
          },
          script_url: '/assets/js/tinymce/tinymce.min.js',
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
