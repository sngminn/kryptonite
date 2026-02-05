import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type SearchFormValues, searchSchema } from "../schema";

export function useSearchForm() {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keyword: "",
    },
    mode: "onSubmit",
  });

  return form;
}
