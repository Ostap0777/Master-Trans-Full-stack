import React, { useState } from 'react'
import { Box, TextField, Typography,Input } from '@mui/material';
import InputMUI from '../../components/ui/Input/index';
import Header from '../../components/layout/Header/index';
import { Link } from 'react-router-dom';

function HomePage({setIsAuth}) {
	const [inputName, setInputName] = useState()
	const [inputInfo, setInputInfo] = useState()
	const [answers, setAnswers] = useState([])
	console.log(answers)

console.log(inputName)
console.log(inputInfo)
	function addAnswer() {
		const data = {
			id: Date.now(),
			name: inputName,
			info: inputInfo
			}
		console.log(data)

		setAnswers((prev) => [...prev, data]);
		setInputName(''); // очищаємо поле
		setInputInfo('');
	}


	function deleteAnswer(id) {
		setAnswers(prev => prev.filter( answer => answer.id !== id) )
	}

	// const [number, setNumber] = useState(0);

	// const handlePlus = () => {
	// 	setNumber(number + 1)
	// } 
	// console.log(number)
	// console.log(number)

  return (
	 <Box>
		<Header  setIsAuth={setIsAuth} />
		Ви увійшли
      <div>
      <div>
      <input
		 onChange={(e) => setInputName(e.target.value) }
		  type="text"
		   />
		<input 
		onChange={(e) => setInputInfo(e.target.value) }
		 type="text" 
		 />
		<button onClick={addAnswer}>Add</button>
      		</div>
      </div>
		<Box >
			{answers.map((answer) => (
				<Box  sx={{display: 'flex', alignItems: 'center'}} key={answer.id}>
				<p>{answer.name}</p>
				<p>{answer.info}</p>
				<Typography 
				onClick={() => deleteAnswer(answer.id)}
				sx={{paddingLeft: '20px', color: 'red'}}
				>X
				</Typography>
				</Box>
			))}
		</Box>
		<Link to="/customer/settings/my-orders">Settings</Link>
	 </Box>
  )
}

export default HomePage;