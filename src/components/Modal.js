export default function Modal({ width, height, children, onClose }) {
  return (
    <div
      onMouseDown={onClose}
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    >
      <div
        className={`w-[${width}px] h-[${height}px] bg-orange-50 rounded-lg`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
