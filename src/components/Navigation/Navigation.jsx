import React, { useEffect, useState } from 'react';
import {
	Link
} from "react-router-dom";

export default function Navigation() {
	const [open, setOpen] = useState(false);

	// useEffect(() => {

	// }, []);

	const onOpen = () => {
		setOpen(!open);

		// Wrap every letter in a span
		const textWrapper = document.querySelectorAll('.ml9 .letters');

		Array.from(textWrapper).forEach(node => {
			node.innerHTML = node.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
			window.anime.timeline({ loop: false })
				.add({
					targets: '.ml9 .letter',
					scale: [0, 1],
					duration: 1500,
					elasticity: 600,
					delay: (el, i) => 20 * (i + 1)
				});
		});
	}

	return (
		<div className="w-nav">
			<div className="w-button">
				<button onClick={onOpen}>Open</button>
			</div>
			<nav className={open ? 'open' : ''}>
				<ul>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/">Home</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/couple">Couple</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/our-story">Our Story</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/wedding-party">Wedding Party</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/event-info">Event Info</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/gallery">Gallery</Link></span>
							</span>
						</h1>
					</li>
					<li>
						<h1 className="ml9">
							<span className="text-wrapper">
								<span className="letters"><Link to="/registry">Registry</Link></span>
							</span>
						</h1>
					</li>
				</ul>
				<div className="img-wrap">
					<img src="ring.png" />
					{/* <img src="greenery-1.png" /> */}
				</div>
			</nav>
		</div>
	);
}
