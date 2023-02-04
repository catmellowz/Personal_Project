export default function Input({
  placeholder,
  name,
  type,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <input
        name={name}
        type={type || 'text'}
        required
        className='relative h-12 w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className='invalid:border-red-500'>{error}</div>}
    </div>
  );
}
