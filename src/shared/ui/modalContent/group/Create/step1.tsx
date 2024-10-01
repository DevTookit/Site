/* svg */
import AddPhotoRounded from '@svg/icon_add_photo_rounded.svg?react';

interface CreateGroupStep1rops {
  image: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setGroupName: (groupName: string) => void;
}

const CreateGroupStep1: React.FC<CreateGroupStep1rops> = ({
  image,
  handleImageChange,
  setGroupName,
}) => {
  return (
    <div className="h-[340px] rounded-[10px] bg-primary">
      <div className="relative mb-5 flex h-[200px] items-center justify-center rounded-t-lg bg-lighten-100">
        {image ? (
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="그룹 프로필 이미지"
          />
        ) : (
          <span className="text-lg text-lighten-300">
            그룹 대표 이미지 등록
          </span>
        )}

        <label className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <AddPhotoRounded />
          <input
            id="groupImageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="px-10">
        <h4 className="text-bold mb-5 text-xl text-lighten-500">
          그룹 이름 설정
        </h4>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGroupName(e.target.value)
          }
          placeholder="그룹 이름을 설정해주세요."
          className="mb-[10px] h-12 w-full rounded-md border-2 border-solid border-lighten-100 bg-lighten-100 p-4 text-lg text-lighten-500 placeholder:text-base placeholder:text-lighten-300"
        />
        <span className="text-base text-lighten-200">
          언제든지 수정가능합니다.
        </span>
      </div>
    </div>
  );
};

export default CreateGroupStep1;
