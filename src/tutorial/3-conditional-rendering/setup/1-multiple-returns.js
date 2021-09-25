import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
	const [isloading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [user, setUser] = useState('default user');

	useEffect(() => {
		fetch(url)
			.then(resp => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				} else {
					setLoading(false);
					setError(true);
					throw new Error(resp.statusText);
				}
			})
			.then(user => {
				const { login } = user;
				setUser(login);
				setLoading(false);
			})
			.catch(error => {
				console.log(error);
				setError(true);
				setLoading(false);
			});
	}, []);
	if (isloading) {
		return <h1>Loading ...</h1>;
	}
	if (isError) {
		return <h1>Error...</h1>;
	}

	return <h1>{user}</h1>;
};

export default MultipleReturns;
