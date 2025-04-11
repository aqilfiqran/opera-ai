/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface TextMarkdownProps {
  text: string;
}

export default function TextMarkdown({ text }: TextMarkdownProps) {
  return (
    <div className="prose prose-sm prose-headings:font-medium prose-headings:text-neutral-900 prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-code:bg-neutral-100 prose-code:p-0.5 prose-code:rounded prose-code:text-neutral-800 max-w-none text-neutral-800">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }: {
            node?: any;
            inline?: boolean;
            className?: string;
            children?: React.ReactNode;
          }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ?
                <SyntaxHighlighter
                  style={oneDark as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  className="rounded-md border border-neutral-200"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              : <code className="rounded bg-neutral-100 p-0.5 text-neutral-800" {...props}>
                  {children}
                </code>;
          },
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
