import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const useLoginForm = (setIsAuth: (value: boolean) => void) => {
	const navigate = useNavigate()
	const [password, setPassword] = useState<string>('');
	const [email,setEmail] = useState<string>('');
	const [error, setError] = useState<string | null>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
  
		if (email === 'test@gmail.com' && password === '1111') {
		  setIsAuth(true);
		  navigate('/home');
		} else {
		  setError('Невірні дані');
		}
	 };
	 return {
		email,
		setEmail,
		password,
		setPassword,
		error,
		setError,
		handleSubmit,
	 };
}