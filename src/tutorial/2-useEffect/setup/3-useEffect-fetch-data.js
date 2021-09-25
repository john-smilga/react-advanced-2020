import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// use effect cannot await a promise Aysnc cannot
// be careful to use functions that trigger reRender
const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
		// -> infinite Loop if useEffect called every time
		// console.log(users);
	};
	useEffect(() => {
		// Fetch Request
		getUsers();
	}, []);
	return (
		<>
			<h3>Github Users</h3>
			<ul className='users'>
				{users.map(user => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;
