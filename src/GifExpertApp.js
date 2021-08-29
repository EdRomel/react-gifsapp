import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'HunterxHunter']);
	// }

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					categories.map(category => (
						// return <li key={category}>{category}</li>
						<GifGrid
							key={category}
							category={category}
						/>
					))
				}
			</ol>
		</Fragment>
	)
};

export default GifExpertApp;
