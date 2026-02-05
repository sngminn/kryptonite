import { useSearchForm } from "../hooks/useSearchForm";
import { SearchFormValues } from "../schema";

interface Props {
  onSearch: (keyword: string) => void;
}

export default function SearchForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSearchForm();

  const onSubmit = (data: SearchFormValues) => {
    onSearch(data.keyword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <div className="flex gap-2">
        <input
          {...register("keyword")}
          placeholder="검색어 입력(2~20자)"
          className="rounded border p-2 text-white"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="rounded bg-blue-500 p-2 text-white disabled:bg-gray-300"
      >
        검색
      </button>
      {errors.keyword && (
        <span className="text-red-500 text-sm">{errors.keyword.message}</span>
      )}
    </form>
  );
}
