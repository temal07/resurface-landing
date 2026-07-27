const Privacy = () => {
  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gradient-start/30 to-background pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="prose max-w-2xl w-full text-muted-foreground text-center">
          <p>
            <strong>Last updated:</strong> July 27, 2026
          </p>
          <p>
            Resurface is a Chrome extension designed to help you quickly rediscover relevant pages from your browsing history and bookmarks. This Privacy Policy aims to clearly explain what data Resurface accesses, how it is used, and where it is stored.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Information Resurface Accesses</h2>
          <ul className="text-left mx-auto inline-block">
            <li>
              <strong>Browsing history &amp; bookmarks:</strong> To suggest relevant content, Resurface scans your browser history and bookmarks to build a local index of pages you&rsquo;ve visited or saved.
            </li>
            <li>
              <strong>Page content:</strong> For indexed pages, Resurface extracts relevant text content, solely to generate summaries and compute a numerical representation ("embedding") that determines relevance.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Paid API Usage</h2>
          <p>
            Resurface relies on the paid Gemini API from Google. Data submitted via the paid Gemini API is not used by Google to train its models and is retained briefly for abuse monitoring only.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">How Data is Processed</h2>
          <p>
            When generating summaries and embeddings, Resurface sends page text to its backend service, which then forwards it to Google's Gemini API. After processing, the backend returns only the results to your browser.
          </p>
          <ul className="text-left mx-auto inline-block">
            <li>
              The Resurface backend <strong>does not persist, log, or store</strong> your page content. All data is handled transiently in memory, strictly for the duration of the request.
            </li>
            <li>
              There is <strong>no server-side database or file storage</strong> of your content.
            </li>
            <li>
              Google&rsquo;s use of submitted data is governed by its <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">Gemini API terms and privacy policy</a>.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Local Data Storage</h2>
          <p>
            All information that Resurface retains is stored <strong>locally</strong> on your device using Chrome's <code>storage.local</code>. This includes:
          </p>
          <ul className="text-left mx-auto inline-block">
            <li>Page embeddings and summaries, keyed by URL</li>
            <li>Recently viewed and cached page results</li>
          </ul>
          <p>
            None of this local data is ever transmitted elsewhere, except when necessary for processing as described above. The data is not synced to any remote server. Uninstalling the extension deletes all local data.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">What Resurface Does <em>Not</em> Do</h2>
          <ul className="text-left mx-auto inline-block">
            <li>
              Resurface does <strong>not</strong> sell or transfer your data to third parties (other than Google for the sole purpose of providing summaries and embeddings).
            </li>
            <li>
              Resurface does <strong>not</strong> use your data for advertising, profiling, or assessing creditworthiness.
            </li>
            <li>
              Resurface does <strong>not</strong> use your data for any purposes beyond surfacing relevant pages for you.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Chrome Extension Permissions</h2>
          <ul className="text-left mx-auto inline-block">
            <li>
              <code>history</code> &mdash; To index pages you&rsquo;ve visited for use in suggestions.
            </li>
            <li>
              <code>bookmarks</code> &mdash; To include bookmarked pages in the index.
            </li>
            <li>
              <code>tabs</code> &mdash; To access metadata of open tabs and suggest related previously visited pages.
            </li>
            <li>
              <code>storage</code> &mdash; To cache page data, summaries, and embeddings locally for seamless operation.
            </li>
            <li>
              <code>unlimitedStorage</code> &mdash; As page data grows with your history, more storage space may be required.
            </li>
            <li>
                <code>scripting</code> &mdash; To inject Resurface's own content script into tabs
                that were already open before the extension was installed or updated. Chrome only
                injects content scripts into pages loaded afterward, so without this Resurface
                wouldn't work on those tabs until you reloaded them. No other code is injected.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Contact</h2>
          <p>
            If you have questions about this policy, please contact: <a href="mailto:temiralimov38@gmail.com">temiralimov38@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;