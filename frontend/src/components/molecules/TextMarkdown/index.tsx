import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

interface TextMarkdownProps {
  text: string;
}

export default function TextMarkdown({ text }: TextMarkdownProps) {
  return (
    <div className="prose prose-sm prose-headings:font-medium prose-headings:text-neutral-900 prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-code:bg-neutral-100 prose-code:p-0.5 prose-code:rounded prose-code:text-neutral-800 max-w-none text-neutral-800">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}
