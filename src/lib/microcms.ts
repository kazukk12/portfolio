import axios from "axios";
import { Blog } from "@/types/microcms";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN!;
const apiKey = process.env.MICROCMS_API_KEY!;

export const client = axios.create({
  baseURL: `https://${serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": apiKey,
  },
});

// 記事一覧を取得
export const getBlogList = async () : Promise<Blog[]> => {
    try {
        const res  = await client.get("/blogs");
        return res.data.contents;
    } catch (error) {
        console.error("記事の取得に失敗しました:", error);
        return [];
    }
};

// 記事詳細を取得(id指定)
export const getBlogDetail =async (id: string): Promise<Blog | null> => {
    try {
        const res = await client.get(`/blogs/${id}`);
        return res.data;
    } catch (error) {
        console.error(`記事詳細の取得に失敗しました: ${id}`, error);
        return null;
    }
};
