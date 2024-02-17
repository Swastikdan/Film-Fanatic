export default function Loading() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
              <div
                className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
    </>
  );
}