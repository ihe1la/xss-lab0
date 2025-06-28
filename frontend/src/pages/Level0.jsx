import { useSearchParams } from 'react-router-dom';

export default function Level0() {
  const [searchParams] = useSearchParams();
  const msg = searchParams.get('msg') || 'Nothing here...';

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">🧪 Level 0: Reflected XSS</h1>
      <p className="mb-2">Try injecting something into the <code>?msg=</code> parameter.</p>
      <div
        className="p-4 border bg-black rounded w-full max-w-xl"
        dangerouslySetInnerHTML={{ __html: msg }}
      ></div>
    </div>
  );
}
