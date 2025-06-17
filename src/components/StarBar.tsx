import { Star } from 'lucide-react';

const StarBar = ({ note, setNote = null }) => {
  // const [note, setNote] = useState(0)

  const handleNote = (e: number) => {
    if (setNote)
      if (note == e)
        setNote(0)
      else
        setNote(e)
  }

  return (
    <div className='flex gap-1'>
      <Star className={`${setNote ? "hover:cursor-pointer" : ""}`} color={note >= 1 ? "#f4d03f" : "#000"} onClick={() => handleNote(1)} />
      <Star className={`${setNote ? "hover:cursor-pointer" : ""}`} color={note >= 2 ? "#f4d03f" : "#000"} onClick={() => handleNote(2)} />
      <Star className={`${setNote ? "hover:cursor-pointer" : ""}`} color={note >= 3 ? "#f4d03f" : "#000"} onClick={() => handleNote(3)} />
      <Star className={`${setNote ? "hover:cursor-pointer" : ""}`} color={note >= 4 ? "#f4d03f" : "#000"} onClick={() => handleNote(4)} />
      <Star className={`${setNote ? "hover:cursor-pointer" : ""}`} color={note >= 5 ? "#f4d03f" : "#000"} onClick={() => handleNote(5)} />
    </div>
  )
}

export default StarBar;
