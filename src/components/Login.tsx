import React from 'react';
import { Mail, Lock, CreditCard, ArrowRight, Github, Chrome as Google } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isRegister, setIsRegister] = React.useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
      >
        <div className="bg-primary p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">{isRegister ? 'Crear Cuenta' : 'Bienvenido de nuevo'}</h2>
          <p className="text-white/70 text-sm">Accede a tu carné digital y gestiona tus préstamos</p>
        </div>

        <div className="p-8">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            {isRegister && (
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Nombre Completo</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Número de Carné / Email</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Ej: 12345678X" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Contraseña</label>
                {!isRegister && <button type="button" className="text-xs font-bold text-primary hover:underline">¿Olvidaste tu clave?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              {isRegister ? 'Registrarse' : 'Iniciar Sesión'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold">O continúa con</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-600">
              <Google className="w-5 h-5" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-600">
              <Github className="w-5 h-5" /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            {isRegister ? '¿Ya tienes cuenta?' : '¿Aún no tienes carné?'} {' '}
            <button 
              onClick={() => setIsRegister(!isRegister)}
              className="text-primary font-bold hover:underline"
            >
              {isRegister ? 'Inicia sesión' : 'Solicítalo aquí'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
