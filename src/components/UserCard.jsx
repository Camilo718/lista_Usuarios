import {motion} from 'framer-motion';
  
export default function UserCard({usuario}) {
  return (
    <motion.div 
      className="p-4 bg-white shadow-md rounded hover:scale-105 transition-transform duration-300 flex flex-col h-full items-center"
    >
        <img className="w-16 h-16 rounded-full mx-auto" src={usuario.foto} alt={usuario.nombre} />
        <h3 className="text-center font-bold mt-2">{usuario.nombre} {usuario.apellidos}</h3>
        <p className="text-center text-sm text-gray-600">{usuario.perfil}</p>
        <p className="text-center text-xs mt-1 italic flex-grow">{usuario.intereses}</p>
        <p className="text-center text-xs text-blue-500 mt-1">{usuario.correo}</p>
    </motion.div>
  )
}