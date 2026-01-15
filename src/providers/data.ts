import { BaseRecord, DataProvider } from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resourse,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resourse !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: [],
      total: 0,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};
