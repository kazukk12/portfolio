import { getBlogDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

export default async function BlogDetailPage({params}: Props) {
    const blog = await getBlogDetail(params.id);

    if (!blog) {
        notFound(); //404リダイレクト
    }

    return (
        <main className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div
                className="prose" 
                dangerouslySetInnerHTML={{
                __html: blog.body,
                }}
            />
        </main>
    );
}