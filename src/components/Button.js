export default function Button({ name, onClick, type }) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type || 'button'}
        className=' flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 '
      >
        {name}
      </button>
    </div>
  );
}
