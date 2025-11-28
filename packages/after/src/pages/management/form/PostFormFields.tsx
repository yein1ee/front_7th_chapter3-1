import { FormInput, FormSelect, FormTextarea } from '@/shared/components/molecules';

type ManagementFormProps = {
  formData: any;
  setFormData: (value: any) => void;
};

export const PostFormFields: React.FC<ManagementFormProps> = ({ formData, setFormData }) => (
  <>
    <FormInput
      name="title"
      value={formData.title || ''}
      onChange={value => setFormData({ ...formData, title: value })}
      label="제목"
      placeholder="게시글 제목을 입력하세요"
      required
      width="full"
      fieldType="postTitle"
    />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormInput
        name="author"
        value={formData.author || ''}
        onChange={value => setFormData({ ...formData, author: value })}
        label="작성자"
        placeholder="작성자명"
        required
        width="full"
      />
      <FormSelect
        name="category"
        value={formData.category || ''}
        onChange={value => setFormData({ ...formData, category: value })}
        options={[
          { value: 'development', label: 'Development' },
          { value: 'design', label: 'Design' },
          { value: 'accessibility', label: 'Accessibility' },
        ]}
        label="카테고리"
        placeholder="카테고리 선택"
        size="md"
      />
    </div>
    <FormTextarea
      name="content"
      value={formData.content || ''}
      onChange={value => setFormData({ ...formData, content: value })}
      label="내용"
      placeholder="게시글 내용을 입력하세요"
      rows={6}
    />
  </>
);
