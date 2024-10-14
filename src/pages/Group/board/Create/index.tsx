import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import useLayout from '@/shared/hooks/useLayout';
import Breadcrumb from '@/shared/ui/group/BreadCrumb';

import SkillInput from '@/features/input/Skill';
import contentApi from '@/shared/api/contentApi';
import { useNavigate } from 'react-router-dom';
import useLoadingStore from '@/shared/store/loading';

const BlogEditor: React.FC = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();
  const { data } = useLayout();
  const editorRef = useRef<any>(null);
  const [name, setName] = useState('');
  const [skills, setSkills] = useState<
    { name: string; icon: any; color: string }[]
  >([]);

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      contentApi
        .createContent(
          data.currentGroupTab?.id ?? 0,
          data.currentRepository?.folderId ?? 0,
          {
            name: name,
            languages: [],
            skills: skills.map((el) => el.name),
            content: content,
            codeDescription: '',
            type: 'BOARD',
            parentId: null,
          },
        )
        .then(() => {
          navigate(-1);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="mb-1 mt-6 flex justify-start">
        <Breadcrumb
          items={
            (data.currentRepository?.depth1 ?? '') +
            '|' +
            (data.currentRepository?.depth2 ?? '') +
            '|' +
            (data.currentRepository?.depth3 ?? '')
          }
        />
      </div>
      <h4 className="text-[32px] font-bold text-lighten-500">
        {data.currentRepository?.name}
      </h4>
      <div className="mx-auto mt-10 min-h-[600px] w-full rounded-lg">
        <input
          type="text"
          placeholder="그룹 이름을 설정해주세요."
          onChange={(e) => setName(e.target.value)}
          className="mb-6 h-12 w-full rounded-md border-2 border-solid border-primary bg-primary p-4 pl-0 text-[30px] text-lighten-600 placeholder:text-[30px] placeholder:text-lighten-300"
        />
        <Editor
          apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
          onInit={(evt, editor) => {
            editorRef.current = editor;
            setLoading(false);
          }}
          initialValue="Start writing your blog..."
          init={{
            branding: false,
            height: 600,
            menubar: true,
            skin: 'oxide-dark', // 다크 스킨 사용
            content_css: 'dark', // 에디터 내부 콘텐츠에도 다크 테마 적용
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

            content_style: `
            body { background-color: #17161A; color: #F1F1F1; font-family:Helvetica,Arial,sans-serif; font-size:14px; }
            .tox .tox-toolbar { background-color: #17161A; border-color: #2C2A31; }
            .tox .tox-editor-header { background-color: #17161A; border-color: #2C2A31; }
            .tox .tox-sidebar__nav { background-color: #17161A; border-color: #2C2A31; }
            .tox .tox-tbtn { color: #F1F1F1; }
            .tox .tox-tbtn:hover { background-color: #2C2A31; }
          `, // 툴바와 버튼에 커스텀 색상 적용
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
              nonbreaking:
                '/assets/js/tinymce/plugins/nonbreaking/plugin.min.js',
              visualchars:
                '/assets/js/tinymce/plugins/visualchars/plugin.min.js',
              preview: '/assets/js/tinymce/plugins/preview/plugin.min.js',
              quickbars: '/assets/js/tinymce/plugins/quickbars/plugin.min.js',
            },
            script_url: '/assets/js/tinymce/tinymce.min.js',
          }}
        />
        <div className="mt-3">
          <SkillInput setSkills={setSkills} skills={skills} />
        </div>
        <button
          className="mb-5 mt-4 rounded bg-brand px-4 py-2 text-white"
          onClick={handleSave}
        >
          게시글 생성
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
