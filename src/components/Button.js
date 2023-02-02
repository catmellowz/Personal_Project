export default function Button({ name }) {
  return (
    <div>
      <button
        type='submit'
        className='group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
      >
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
        {name}
      </button>
    </div>
  );
}
