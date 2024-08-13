
interface KeyProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Key: React.FC<KeyProps> = ({ label, onClick }) => {
  return (
    <button
      className="w-full bg-white drop-shadow-lg rounded-md px-2 py-4 m-2 text-lg font-medium hover:bg-gray-200 focus:outline-none ${className}"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px]">
      <div className="w-full flex">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <Key key={key} label={key} onClick={() => onKeyPress(key)} />
        ))}
      </div>
      <div className="w-full flex px-10">
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <Key key={key} label={key} onClick={() => onKeyPress(key)} />
        ))}
      </div>
      <div className="w-full flex px-10">
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M', '\'', '-'].map((key) => (
          <Key key={key} label={key} onClick={() => onKeyPress(key)} />
        ))}
      </div>
      <div className="w-full flex px-20">
        <Key label="Space" onClick={() => onKeyPress(' ')} />
      </div>
    </div>
  );
};

export default Keyboard;
