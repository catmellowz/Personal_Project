export default function Input({
  placeholder,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor='Email or Mobile Phone'
        className='sr-only'
      ></label>
      <input
        name={name}
        type={type}
        autoComplete='email'
        required
        className='relative h-12 block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
